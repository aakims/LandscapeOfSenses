                mapboxgl.accessToken = 'pk.eyJ1IjoiYWFraW1zIiwiYSI6ImNqZmQ1bm4yaDF4NnQzdW8xem54dmNzYXQifQ.VfaDRyNApyLYnCVL7PcpzA';

        //create a map using the Mapbox Dark theme, zoomed in to Philly
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/aakims/cjfejc27a56ui2sqw2lh5c03m',
            zoom: 11,
            center: [-75.1652, 39.9526]
        });

var sdata2 = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "trip": 1,
        "olive": 1,
        "unixt": 1520329685,
        "time": "9:48:05",
        "date": "6/3/18",
        "speed": 0.17,
        "dust": 34006.28,
        "light": 989,
        "tempC": 19.93,
        "tempF": 67.88
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.174964,
          39.943977
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trip": 1,
        "olive": 2,
        "unixt": 1520329698,
        "time": "9:48:18",
        "date": "6/3/18",
        "speed": 0.18,
        "dust": 691.39,
        "light": 997,
        "tempC": 20.9,
        "tempF": 69.62
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.17498,
          39.943977
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trip": 1,
        "olive": 3,
        "unixt": 1520329708,
        "time": "9:48:28",
        "date": "6/3/18",
        "speed": 0.05,
        "dust": 1963.95,
        "light": 998,
        "tempC": 18.64,
        "tempF": 65.56
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.17501,
          39.943969
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trip": 1,
        "olive": 4,
        "unixt": 1520329719,
        "time": "9:48:39",
        "date": "6/3/18",
        "speed": 0.26,
        "dust": 1877.14,
        "light": 1005,
        "tempC": 19.61,
        "tempF": 67.3
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.175018,
          39.943962
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trip": 1,
        "olive": 5,
        "unixt": 1520329731,
        "time": "9:48:51",
        "date": "6/3/18",
        "speed": 1.73,
        "dust": 644.5,
        "light": 999,
        "tempC": 19.93,
        "tempF": 67.88
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.175132,
          39.943992
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trip": 1,
        "olive": 6,
        "unixt": 1520329741,
        "time": "9:49:01",
        "date": "6/3/18",
        "speed": 2.48,
        "dust": 141.75,
        "light": 989,
        "tempC": 19.29,
        "tempF": 66.72
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.175216,
          39.944076
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trip": 1,
        "olive": 7,
        "unixt": 1520329754,
        "time": "9:49:14",
        "date": "6/3/18",
        "speed": 2.45,
        "dust": 1515.41,
        "light": 992,
        "tempC": 17.03,
        "tempF": 62.66
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.175178,
          39.944217
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trip": 1,
        "olive": 8,
        "unixt": 1520329765,
        "time": "9:49:25",
        "date": "6/3/18",
        "speed": 1.89,
        "dust": 621.12,
        "light": 989,
        "tempC": 16.71,
        "tempF": 62.08
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.175163,
          39.944328
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trip": 1,
        "olive": 9,
        "unixt": 1520329777,
        "time": "9:49:37",
        "date": "6/3/18",
        "speed": 2.39,
        "dust": 724.06,
        "light": 993,
        "tempC": 16.71,
        "tempF": 62.08
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.175209,
          39.944496
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trip": 1,
        "olive": 10,
        "unixt": 1520329790,
        "time": "9:49:50",
        "date": "6/3/18",
        "speed": 2.75,
        "dust": 717.01,
        "light": 990,
        "tempC": 16.06,
        "tempF": 60.92
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.175163,
          39.944618
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trip": 1,
        "olive": 11,
        "unixt": 1520329801,
        "time": "9:50:01",
        "date": "6/3/18",
        "speed": 2.28,
        "dust": 246.44,
        "light": 991,
        "tempC": 16.06,
        "tempF": 60.92
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.175117,
          39.944736
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trip": 1,
        "olive": 12,
        "unixt": 1520329811,
        "time": "9:50:11",
        "date": "6/3/18",
        "speed": 2.72,
        "dust": 1452.97,
        "light": 1005,
        "tempC": 22.19,
        "tempF": 71.94
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.175086,
          39.944866
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trip": 1,
        "olive": 13,
        "unixt": 1520329824,
        "time": "9:50:24",
        "date": "6/3/18",
        "speed": 2.02,
        "dust": 640.84,
        "light": 987,
        "tempC": 20.25,
        "tempF": 68.46
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.175064,
          39.945011
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trip": 1,
        "olive": 14,
        "unixt": 1520329836,
        "time": "9:50:36",
        "date": "6/3/18",
        "speed": 2.82,
        "dust": 436.3,
        "light": 1002,
        "tempC": 19.93,
        "tempF": 67.88
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.175064,
          39.945186
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trip": 1,
        "olive": 15,
        "unixt": 1520329847,
        "time": "9:50:47",
        "date": "6/3/18",
        "speed": 1.96,
        "dust": 269.87,
        "light": 1004,
        "tempC": 21.54,
        "tempF": 70.78
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.175125,
          39.945266
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trip": 1,
        "olive": 16,
        "unixt": 1520329859,
        "time": "9:50:59",
        "date": "6/3/18",
        "speed": 1.73,
        "dust": 688.11,
        "light": 1006,
        "tempC": 20.58,
        "tempF": 69.04
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.175132,
          39.945381
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trip": 1,
        "olive": 17,
        "unixt": 1520329871,
        "time": "9:51:11",
        "date": "6/3/18",
        "speed": 2.29,
        "dust": 893.97,
        "light": 1002,
        "tempC": 18.64,
        "tempF": 65.56
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.175117,
          39.945518
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trip": 1,
        "olive": 18,
        "unixt": 1520329881,
        "time": "9:51:21",
        "date": "6/3/18",
        "speed": 2.52,
        "dust": 1655.31,
        "light": 1005,
        "tempC": 32.5,
        "tempF": 90.5
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.175064,
          39.94564
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trip": 1,
        "olive": 19,
        "unixt": 1520329893,
        "time": "9:51:33",
        "date": "6/3/18",
        "speed": 2.31,
        "dust": 1244.64,
        "light": 996,
        "tempC": 12.52,
        "tempF": 54.54
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.175018,
          39.945766
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trip": 1,
        "olive": 20,
        "unixt": 1520329904,
        "time": "9:51:44",
        "date": "6/3/18",
        "speed": 0.24,
        "dust": 456.17,
        "light": 1004,
        "tempC": 12.84,
        "tempF": 55.12
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.175003,
          39.945804
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trip": 1,
        "olive": 21,
        "unixt": 1520329917,
        "time": "9:51:57",
        "date": "6/3/18",
        "speed": 0.09,
        "dust": 1467,
        "light": 1005,
        "tempC": 13.16,
        "tempF": 55.7
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.174995,
          39.945804
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trip": 1,
        "olive": 22,
        "unixt": 1520329929,
        "time": "9:52:09",
        "date": "6/3/18",
        "speed": 1.55,
        "dust": 2021.63,
        "light": 1011,
        "tempC": 12.84,
        "tempF": 55.12
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.174957,
          39.945823
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trip": 1,
        "olive": 23,
        "unixt": 1520329940,
        "time": "9:52:20",
        "date": "6/3/18",
        "speed": 1.4,
        "dust": 2198.69,
        "light": 1011,
        "tempC": 13.49,
        "tempF": 56.28
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.174926,
          39.945907
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trip": 1,
        "olive": 24,
        "unixt": 1520329952,
        "time": "9:52:32",
        "date": "6/3/18",
        "speed": 0.66,
        "dust": 3643.56,
        "light": 1007,
        "tempC": 13.81,
        "tempF": 56.86
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.174934,
          39.945922
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trip": 1,
        "olive": 25,
        "unixt": 1520329963,
        "time": "9:52:43",
        "date": "6/3/18",
        "speed": 1.95,
        "dust": 1543.56,
        "light": 1007,
        "tempC": 13.16,
        "tempF": 55.7
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.174942,
          39.94601
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trip": 1,
        "olive": 26,
        "unixt": 1520329976,
        "time": "9:52:56",
        "date": "6/3/18",
        "speed": 2.21,
        "dust": 3615.9,
        "light": 1004,
        "tempC": 13.49,
        "tempF": 56.28
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.174926,
          39.946166
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trip": 1,
        "olive": 27,
        "unixt": 1520329988,
        "time": "9:53:08",
        "date": "6/3/18",
        "speed": 1.9,
        "dust": 1570.15,
        "light": 1010,
        "tempC": 13.49,
        "tempF": 56.28
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.17485,
          39.946334
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trip": 1,
        "olive": 28,
        "unixt": 1520330001,
        "time": "9:53:21",
        "date": "6/3/18",
        "speed": 2.11,
        "dust": 1188.81,
        "light": 1006,
        "tempC": 14.13,
        "tempF": 57.44
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.174819,
          39.946475
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trip": 1,
        "olive": 29,
        "unixt": 1520330014,
        "time": "9:53:34",
        "date": "6/3/18",
        "speed": 2.76,
        "dust": 1013.6,
        "light": 1008,
        "tempC": 15.1,
        "tempF": 59.18
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.174781,
          39.946636
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trip": 1,
        "olive": 30,
        "unixt": 1520330028,
        "time": "9:53:48",
        "date": "6/3/18",
        "speed": 3.17,
        "dust": 1138.31,
        "light": 1007,
        "tempC": 16.71,
        "tempF": 62.08
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.174789,
          39.946792
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trip": 1,
        "olive": 31,
        "unixt": 1520330040,
        "time": "9:54:00",
        "date": "6/3/18",
        "speed": 3.33,
        "dust": 537.63,
        "light": 994,
        "tempC": 16.71,
        "tempF": 62.08
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.174972,
          39.946876
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trip": 1,
        "olive": 32,
        "unixt": 1520330053,
        "time": "9:54:13",
        "date": "6/3/18",
        "speed": 3.01,
        "dust": 808.1,
        "light": 994,
        "tempC": 17.03,
        "tempF": 62.66
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.175163,
          39.946903
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trip": 1,
        "olive": 33,
        "unixt": 1520330065,
        "time": "9:54:25",
        "date": "6/3/18",
        "speed": 3.07,
        "dust": 927,
        "light": 997,
        "tempC": 17.03,
        "tempF": 62.66
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.175369,
          39.946926
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trip": 1,
        "olive": 34,
        "unixt": 1520330077,
        "time": "9:54:37",
        "date": "6/3/18",
        "speed": 2.59,
        "dust": 811.03,
        "light": 995,
        "tempC": 17.03,
        "tempF": 62.66
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.175567,
          39.946949
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trip": 1,
        "olive": 35,
        "unixt": 1520330089,
        "time": "9:54:49",
        "date": "6/3/18",
        "speed": 3.27,
        "dust": 1538.68,
        "light": 994,
        "tempC": 17.35,
        "tempF": 63.24
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.17575,
          39.946975
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trip": 1,
        "olive": 36,
        "unixt": 1520330100,
        "time": "9:55:00",
        "date": "6/3/18",
        "speed": 2.62,
        "dust": 745.51,
        "light": 989,
        "tempC": 17.35,
        "tempF": 63.24
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.175888,
          39.946998
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trip": 1,
        "olive": 37,
        "unixt": 1520330113,
        "time": "9:55:13",
        "date": "6/3/18",
        "speed": 3.14,
        "dust": 452.07,
        "light": 992,
        "tempC": 17.35,
        "tempF": 63.24
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.176094,
          39.947017
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trip": 1,
        "olive": 38,
        "unixt": 1520330123,
        "time": "9:55:23",
        "date": "6/3/18",
        "speed": 2.5,
        "dust": 584.11,
        "light": 994,
        "tempC": 17.03,
        "tempF": 62.66
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.176246,
          39.947013
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trip": 1,
        "olive": 39,
        "unixt": 1520330136,
        "time": "9:55:36",
        "date": "6/3/18",
        "speed": 2.95,
        "dust": 509.61,
        "light": 1003,
        "tempC": 56.35,
        "tempF": 133.43
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.176437,
          39.94701
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trip": 1,
        "olive": 40,
        "unixt": 1520330148,
        "time": "9:55:48",
        "date": "6/3/18",
        "speed": 0.02,
        "dust": 1430.72,
        "light": 991,
        "tempC": 22.83,
        "tempF": 73.1
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.176559,
          39.947021
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trip": 1,
        "olive": 41,
        "unixt": 1520330161,
        "time": "9:56:01",
        "date": "6/3/18",
        "speed": 1.76,
        "dust": 518.99,
        "light": 990,
        "tempC": 23.48,
        "tempF": 74.26
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.176734,
          39.94704
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trip": 1,
        "olive": 42,
        "unixt": 1520330172,
        "time": "9:56:12",
        "date": "6/3/18",
        "speed": 2.83,
        "dust": 176.16,
        "light": 982,
        "tempC": 23.15,
        "tempF": 73.68
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.176902,
          39.947093
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trip": 1,
        "olive": 43,
        "unixt": 1520330185,
        "time": "9:56:25",
        "date": "6/3/18",
        "speed": 2.76,
        "dust": 1076.95,
        "light": 987,
        "tempC": 23.8,
        "tempF": 74.84
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.177093,
          39.94712
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trip": 1,
        "olive": 44,
        "unixt": 1520330197,
        "time": "9:56:37",
        "date": "6/3/18",
        "speed": 3.07,
        "dust": 1189.4,
        "light": 991,
        "tempC": 24.12,
        "tempF": 75.42
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.177284,
          39.947166
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trip": 1,
        "olive": 45,
        "unixt": 1520330210,
        "time": "9:56:50",
        "date": "6/3/18",
        "speed": 2.18,
        "dust": 1327.78,
        "light": 994,
        "tempC": 11.23,
        "tempF": 52.21
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.177474,
          39.947181
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trip": 1,
        "olive": 46,
        "unixt": 1520330221,
        "time": "9:57:01",
        "date": "6/3/18",
        "speed": 2.12,
        "dust": 494.52,
        "light": 987,
        "tempC": 10.91,
        "tempF": 51.63
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.177635,
          39.947196
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trip": 1,
        "olive": 47,
        "unixt": 1520330233,
        "time": "9:57:13",
        "date": "6/3/18",
        "speed": 2.14,
        "dust": 2026.31,
        "light": 985,
        "tempC": 10.26,
        "tempF": 50.47
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.177825,
          39.947196
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trip": 1,
        "olive": 48,
        "unixt": 1520330243,
        "time": "9:57:23",
        "date": "6/3/18",
        "speed": 2.52,
        "dust": 368.53,
        "light": 993,
        "tempC": 10.26,
        "tempF": 50.47
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.177978,
          39.947208
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trip": 1,
        "olive": 49,
        "unixt": 1520330256,
        "time": "9:57:36",
        "date": "6/3/18",
        "speed": 2.24,
        "dust": 290.85,
        "light": 981,
        "tempC": 12.2,
        "tempF": 53.96
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.178131,
          39.947257
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trip": 1,
        "olive": 50,
        "unixt": 1520330269,
        "time": "9:57:49",
        "date": "6/3/18",
        "speed": 2.45,
        "dust": 2011.36,
        "light": 977,
        "tempC": 12.52,
        "tempF": 54.54
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.178192,
          39.947414
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trip": 1,
        "olive": 51,
        "unixt": 1520330282,
        "time": "9:58:02",
        "date": "6/3/18",
        "speed": 0.98,
        "dust": 2078.92,
        "light": 968,
        "tempC": 9.62,
        "tempF": 49.31
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.178291,
          39.947486
        ]
      }
    }
  ]
};

var tripIndex; // define trip number 1~11
var indexFields = ["trip", "olive"],
    timeField = ["ftime"],
    displayFields = ["dust", "light", "tempF", "GINI_IND"],
    dataFields = ["unixt", "trip", "olive", "ftime", "dust", "light", "tempF", "GINI_IND"];
var mapCenterCoor; 
var defineMapCenter = function () {
    var midIndex = thisData.length/2;
    mapCenterCorr = thisData[midIndex].geometry.coordinates; 
};


var selectFields = _.uniq(_.union(indexFields, timeField, displayFields, dataFields));

var graphTitles = ["Air Quality", "Light Level", "Temperature", "Gini Index"];
var graphVars = ["chart1", "chart2", "chart3", "chart4"];
var chart1, chart2, chart3, chart4;
var thisData = [];
var lineData;
// DEFINE TRIP DATA 

var defineData = function(tripIndex) {
    thisData = _.chain(sdata.features)
        .filter(function(feature) {
            //console.log(sdata.features[1])
            return ((feature.properties["trip"] === tripIndex) && (feature.properties["olive"] > 5))
        })
        .map(function(feature) {
            feature.properties = _.pick(feature.properties, selectFields);
            console.log(feature.properties);
            console.log(feature);
            return feature;
        })
        .value();

    console.log(thisData[1]);
    return thisData;

};

var graphWidth = 600;
var graphHeight = 130;
var graphMargin = { top: 20, right: 20, bottom: 20, left: 40 };

// setting map object extent 
var mapWidth = 800,
    mapHeight = 650,
    mapMargin = { top: 20, right: 10, bottom: 30, left: 20 };


var center = [2.5725, 39.957049],
    offset = [mapWidth / 2, mapHeight / 2],
    scale = 700000,
    PennSouthProjection = d3.geoConicConformal().scale(scale)
    .parallels([39 + 56 / 60, 40 + 58 / 60])
    .rotate([77 + 45 / 60, 0])
    .center(center)
    .translate(offset);

// x and y axis setup
var x = d3.scaleTime().range([0, graphWidth]);
var y = d3.scaleLinear().range([graphHeight, 0]);



var graphSeries, graphItems, thisIndex;


var setupCanvas = function(thisItem) {

    chart = d3.select("#" + thisItem).append("svg")
        .attr("width", graphWidth + graphMargin.left + graphMargin.right)
        .attr("height", graphHeight + graphMargin.top + graphMargin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + graphMargin.left + "," + graphMargin.top + ")");

    chart.append("text")
        .attr("x", graphWidth - 70)
        .attr("y", 20)
        .attr("text-anchor", "middle")
        .style("font-size", "16px")
        .style("fill", "teal")
        .style("text-decoration", "underline")
        .text(graphTitles[thisIndex]);

};

var parseTime = d3.timeParse("%x");

var prepData = function(yDataIndex) {

    //var thisIndex = _.indexOf(graphItems, graphItem);
    lineData = JSON.parse(JSON.stringify(thisData));
    var yData = displayFields[yDataIndex];

    console.log(yData);
    //console.log(thisData[1]);

    var yMin = d3.min(lineData, function(sensObj) { return sensObj.properties[yData]; }),
        yMax = d3.max(lineData, function(sensObj) { return sensObj.properties[yData]; });

    _.map(lineData, function(feature) {
        feature.properties["ftime"] = new Date(feature.properties["unixt"] * 1000 + 18000000);
        return feature;
    })
    var xMin = d3.min(lineData, function(sensObj) { return sensObj.properties["ftime"] });
    var xMax = d3.max(lineData, function(sensObj) {
        var formatted = new Date(sensObj.properties["ftime"]);
        return formatted
    });

    //var xScale = d3.time.scale()
    //.domain([xMin, xMax])
    //.rnage

    console.log(xMin, xMax);
    console.log(yMin, yMax);
    //https://www.quora.com/How-do-I-use-string-content-as-variable-name-in-JS

    console.log(lineData[0]);
    console.log(thisData[0]);

    var xRange = xMax - xMin,
    yRange = yMax - yMin; 
    console.log(xRange, yRange);
    x.domain([xMin - (xRange * 0.01), xMax]);
    y.domain([yMin - (yRange * 0.1), yMax]);
    //y.domain([yMin - (yRange * 0.05), yMax + (yRange * 0.05)]);

    // set domain to be extent +- 5%
//x.domain([xExtent[0] - (xRange * .05), xExtent[1] + (xRange * .05)]);
//y.domain([yExtent[0] - (yRange * .05), yExtent[1] + (yRange * .05)]);

    graphLine = d3.line()
        .x(function(d) { console.log(d.properties); return x(d.properties["ftime"]) })
        .y(function(d) { return y(d.properties[yData]); });

    lineData = _.map(lineData, function(sensObj) {
        //console.log("in lineData"); 
        sensObj.properties = _.pick(sensObj.properties, "ftime", yData);
        sensObj.properties["ftime"] = +sensObj.properties["ftime"];
        sensObj.properties[yData] = +sensObj.properties[yData];
        return sensObj;
    });
    console.log(lineData);
};

var renderGraph = function() {

    //console.log("Here");

    var axisY = d3.axisLeft(y); 

    axisY.ticks(5); 

    chart.append("g")
        .attr("transform", "translate(0," + graphHeight + ")")
        .call(d3.axisBottom(x));

    chart.append("g")
        .call(axisY);

    console.log(lineData);
    chart.append("path")
        .attr("class", "line")
        .attr("d", graphLine(lineData));
};


var displayGraphs = function(tripIndex) {
    //console.log(thisData);
    //console.log(sdata.features);
    clearCanvas();
    console.log(tripIndex);
    defineData(tripIndex);
    //defineMapCenter(); 
    //console.log(mapCenterCoor);
    //console.log("definedData example:" + thisData[10]) ;
    // graph the all graph divs defined by classname "graphs"
    graphSeries = document.getElementsByClassName("graphs");
    graphItems = _.map(graphSeries, function(graphItem) { return graphItem.id });
    console.log(graphItems);
    //console.log(thisData[10]);
    //prepData();

    //displayMap();




    _.each(graphItems, function(graphItem) {

        //(graphItem === "chart1") :
        //defineData(tripIndex); 
        console.log(thisData);
        thisIndex = _.indexOf(graphItems, graphItem);
        console.log(thisIndex);
        var thisGraph = graphItem;
        var chart, graphLine;
        setupCanvas(graphItem);
        prepData(thisIndex);
        renderGraph();

    });
};


var displayMap = function () {

var mapsvg = d3.select("#map")
        .append("svg")
        .attr("width", mapWidth + mapMargin.left + mapMargin.right)
        .attr("height", mapHeight + mapMargin.top + mapMargin.bottom)
        .attr("transform",
            "translate(" + mapMargin.left + "," + mapMargin.top + ")");

        var geoPath = d3.geoPath()
        .projection(PennSouthProjection);

        var g = mapsvg.append("g");

        g.selectAll("path")
        .data(philly_neighborhoods.features)
        .enter()
        .append("path")
        .attr("fill", "#ccc")
        .attr("stroke", "#333")
        .attr("d", geoPath);

    var mapData = JSON.parse(JSON.stringify(thisData));
    //console.log(mapData[0]);

    var bubbles = mapsvg.append("g");

    bubbles.selectAll("path")
        .data(mapData)
        .enter()
        .append("path")
        .attr("fill", "#900")
        .attr("stroke", "#999")
        .attr("d", geoPath)
        .attr("class", "sensingpts")
        .on("mouseover", function(d) {
            d3.select("#dateval").text(d.properties["date"])
            d3.select("#dustval").text(d.properties["dust"])
            d3.select("#lightval").text(d.properties["light"])
            d3.select("#tempval").text(d.properties["tempF"])
            d3.select("#ginival").text(d.properties["GINI_IND"])
            d3.select(this).attr("class", "sensingpts hover");
        })
        .on("mouseout", function(d) {
            d3.select("#dateval").text("")
            d3.select("#dustval").text("")
            d3.select("#lightval").text("")
            d3.select("#tempval").text("")
            d3.select("#ginival").text("")
            d3.select(this).attr("class", "sensingpts");
        });

    //var datalocator = d3.line()
};

var clearCanvas = function() {

    // ("#" + thisItem).append("svg")
    _.each(graphItems, function(thisItem) {
        $("#" + thisItem).empty();
    });
    $("#map").empty();

    //var items = d3.select('svg').selectAll('.item').data(newData);

    // Remove old elements:
    //items.exit().remove();
};


map.on("load", function() {
    map.addSource("national-park", {
        "type": "geojson",
        "data": sdata2 
    });

    map.addLayer({
        "id": "park-boundary",
        "type": "fill",
        "source": "national-park",
        "paint": {
            "fill-color": "#888888",
            "fill-opacity": 0.4
        },
        "filter": ["==", "$type", "Polygon"]
    });

    map.addLayer({
        "id": "park-volcanoes",
        "type": "circle",
        "source": "national-park",
        "paint": {
            "circle-radius": 6,
            "circle-color": "#B42222"
        },
        "filter": ["==", "$type", "Point"],
    });

    
});