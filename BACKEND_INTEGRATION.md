# FloodSense Backend Integration Guide

## Overview
This guide explains how to connect your Google Colab notebook to the FloodSense frontend.

## Step 1: Set Up Flask/FastAPI Backend in Colab

Add this code to your Colab notebook to create a backend server:

```python
# Install required packages
!pip install flask flask-cors

# Create a simple Flask API
from flask import Flask, request, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend requests

@app.route('/api/analyze-route', methods=['POST'])
def analyze_route():
    """
    Receives location data from frontend and returns analysis
    
    Expected request body:
    {
      "from": "MP Nagar",
      "to": "Airport"
    }
    
    Expected response:
    {
      "originalRoute": {
        "path": ["MP Nagar", "New Market", "Kolar", "Airport"],
        "distance": "16.2 km",
        "time": "28 min",
        "avgRisk": 4.2
      },
      "recommendedRoute": {
        "path": ["MP Nagar", "VIP Road", "BHEL", "Airport"],
        "distance": "18.5 km",
        "time": "32 min",
        "avgRisk": 1.8
      },
      "waypoints": [
        {"location": "MP Nagar", "risk": 2.93},
        {"location": "New Market", "risk": 3.40},
        {"location": "Kolar", "risk": 3.82},
        {"location": "Airport", "risk": 1.65}
      ],
      "alert": {
        "level": "HIGH",
        "message": "Heavy rain incoming..."
      }
    }
    """
    try:
        data = request.json
        from_location = data.get('from')
        to_location = data.get('to')
        
        # TODO: Call your existing demo code here
        # Example: results = run_pipeline_a(...) and evaluate_routes(...)
        
        # For now, return mock data
        response = {
            "originalRoute": {
                "path": [from_location, "New Market", "Kolar", to_location],
                "distance": "16.2 km",
                "time": "28 min",
                "avgRisk": 4.2
            },
            "recommendedRoute": {
                "path": [from_location, "VIP Road", "BHEL", to_location],
                "distance": "18.5 km",
                "time": "32 min",
                "avgRisk": 1.8
            },
            "waypoints": [
                {"location": from_location, "risk": 2.93},
                {"location": "New Market", "risk": 3.40},
                {"location": "Kolar", "risk": 3.82},
                {"location": to_location, "risk": 1.65}
            ],
            "alert": {
                "level": "HIGH",
                "message": "Heavy rain incoming. Predicted HIGH congestion risk on standard route in the next 60 minutes."
            }
        }
        
        return jsonify(response)
    except Exception as e:
        return jsonify({"error": str(e)}), 400

# Run the server
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
```

## Step 2: Expose Your Colab Server

In Colab, use ngrok to expose your local server:

```python
# Install ngrok
!pip install pyngrok

# Authenticate with ngrok (get free account at https://ngrok.com)
from pyngrok import ngrok
ngrok.set_auth_token('YOUR_NGROK_TOKEN')

# Expose Flask server
public_url = ngrok.connect(5000)
print(f"Public URL: {public_url}")
```

This will give you a public URL like: `https://abc123.ngrok.io`

## Step 3: Update Frontend to Call Your Backend

Edit `client/src/pages/Home.tsx` and replace the mock data section with:

```typescript
try {
  const backendUrl = 'https://your-ngrok-url.ngrok.io'; // Replace with your ngrok URL
  
  const response = await fetch(`${backendUrl}/api/analyze-route`, { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ from, to }) 
  });
  
  if (!response.ok) {
    throw new Error('Backend error');
  }
  
  const data = await response.json();
  setRouteData(data);
} catch (error) {
  console.error('Error:', error);
  alert('Error analyzing route. Please check backend connection.');
}
```

## Step 4: Integrate Your Actual Analysis Code

In the Flask route, replace the mock data with your actual notebook code:

```python
@app.route('/api/analyze-route', methods=['POST'])
def analyze_route():
    data = request.json
    from_location = data.get('from')
    to_location = data.get('to')
    
    # Call your existing functions
    db_snapshot = run_pipeline_a(
        rainfall_mm_hr=72.0,
        duration_hr=2.5,
        humidity_pct=88.0,
        prev_rain_mm=45.0,
        is_peak_hour=1,
    )
    
    routes = evaluate_routes(from_location, to_location)
    all_risks = get_all_risk_scores()
    
    # Format response
    response = {
        "originalRoute": {
            "path": routes[1]['path'],  # Worst route
            "distance": f"{routes[1]['total_distance']:.1f} km",
            "time": f"{routes[1]['total_time']:.0f} min",
            "avgRisk": routes[1]['avg_risk']
        },
        "recommendedRoute": {
            "path": routes[0]['path'],  # Best route
            "distance": f"{routes[0]['total_distance']:.1f} km",
            "time": f"{routes[0]['total_time']:.0f} min",
            "avgRisk": routes[0]['avg_risk']
        },
        "waypoints": [
            {"location": loc, "risk": all_risks.get(loc, 0)}
            for loc in routes[0]['path']
        ],
        "alert": {
            "level": "HIGH" if routes[0]['avg_risk'] >= 3 else "MODERATE",
            "message": "Heavy rain incoming..."
        }
    }
    
    return jsonify(response)
```

## Testing

1. Start your Colab Flask server
2. Get the ngrok public URL
3. Update the `backendUrl` in Home.tsx
4. Enter locations in the frontend form
5. Click "Find Safe Route" to test the connection

## Troubleshooting

- **CORS Error**: Make sure `CORS(app)` is enabled in Flask
- **Connection Refused**: Check that ngrok URL is correct and server is running
- **Timeout**: Your analysis might be taking too long; consider optimizing the code
