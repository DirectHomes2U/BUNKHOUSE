var APP_DATA = {
  "scenes": [
    {
      "id": "0-exterior",
      "name": "EXTERIOR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.3194728552947943,
          "pitch": -0.07046394131822531,
          "rotation": 0,
          "target": "1-general"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-general",
      "name": "GENERAL",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.566359246627659,
          "pitch": 0.07942389131246763,
          "rotation": 0,
          "target": "3-dining-room"
        },
        {
          "yaw": 0.23940805740914506,
          "pitch": 0.10705174419620711,
          "rotation": 0,
          "target": "4-kitchen"
        },
        {
          "yaw": 0.5954454480671618,
          "pitch": 0.07141107425828963,
          "rotation": 0,
          "target": "5-corridor-first-level"
        },
        {
          "yaw": -1.0981130087406346,
          "pitch": 0.05508090934341148,
          "rotation": 0,
          "target": "2-exterior-deck"
        },
        {
          "yaw": -2.800487397916557,
          "pitch": 0.2544675325913275,
          "rotation": 0,
          "target": "0-exterior"
        },
        {
          "yaw": 1.68476046436278,
          "pitch": -0.20603023809215415,
          "rotation": 0,
          "target": "9-corridor-second-level"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-exterior-deck",
      "name": "EXTERIOR DECK",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.382211038905015,
          "pitch": 0.051768321498705916,
          "rotation": 0,
          "target": "3-dining-room"
        },
        {
          "yaw": -3.0873847799647436,
          "pitch": 0.0714562153284497,
          "rotation": 0,
          "target": "1-general"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-dining-room",
      "name": "DINING ROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.729801515127358,
          "pitch": 0.14812930652793632,
          "rotation": 0,
          "target": "2-exterior-deck"
        },
        {
          "yaw": -0.14391915941209987,
          "pitch": 0.04604431182229618,
          "rotation": 0,
          "target": "4-kitchen"
        },
        {
          "yaw": 0.859200906024622,
          "pitch": 0.06534308958609003,
          "rotation": 0,
          "target": "1-general"
        },
        {
          "yaw": 0.3376765979833021,
          "pitch": 0.05183489865237334,
          "rotation": 0,
          "target": "5-corridor-first-level"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-kitchen",
      "name": "KITCHEN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6155154450782527,
          "pitch": 0.14957363766608722,
          "rotation": 0,
          "target": "1-general"
        },
        {
          "yaw": 0.9642554545449489,
          "pitch": 0.21048764457871805,
          "rotation": 0,
          "target": "5-corridor-first-level"
        },
        {
          "yaw": 3.0883177243942574,
          "pitch": 0.1586734643206409,
          "rotation": 0,
          "target": "3-dining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-corridor-first-level",
      "name": "CORRIDOR FIRST LEVEL",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6344080132737382,
          "pitch": 0.15866870599355742,
          "rotation": 0,
          "target": "6-bathroom"
        },
        {
          "yaw": 0.0970954889995781,
          "pitch": 0.16605497188005636,
          "rotation": 0,
          "target": "7-bedroom-1"
        },
        {
          "yaw": 1.134687212222433,
          "pitch": 0.1888947196179771,
          "rotation": 0,
          "target": "8-bedroom-2"
        },
        {
          "yaw": -2.513617237357119,
          "pitch": 0.24003123390532544,
          "rotation": 0,
          "target": "1-general"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bathroom",
      "name": "BATHROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0560224052797036,
          "pitch": 0.22670382648157883,
          "rotation": 0,
          "target": "5-corridor-first-level"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bedroom-1",
      "name": "BEDROOM 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.501926730773958,
          "pitch": 0.14941755959439895,
          "rotation": 0,
          "target": "5-corridor-first-level"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-bedroom-2",
      "name": "BEDROOM 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.48365622557290777,
          "pitch": 0.15801103189078702,
          "rotation": 0,
          "target": "5-corridor-first-level"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-corridor-second-level",
      "name": "CORRIDOR SECOND LEVEL",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.934514552250649,
          "pitch": 0.6470205810745124,
          "rotation": 0,
          "target": "1-general"
        },
        {
          "yaw": -1.3998284583496865,
          "pitch": 0.14915977754112575,
          "rotation": 0,
          "target": "11-loft-living-room"
        },
        {
          "yaw": 0.09452069441025301,
          "pitch": 0.15213217646331145,
          "rotation": 0,
          "target": "10-2nd-floor-bathroom"
        },
        {
          "yaw": 1.7543227710678195,
          "pitch": 0.1539626390456874,
          "rotation": 0,
          "target": "12-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-2nd-floor-bathroom",
      "name": "2ND FLOOR BATHROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.021010014462444,
          "pitch": 0.12836941596301088,
          "rotation": 0,
          "target": "9-corridor-second-level"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-loft-living-room",
      "name": "LOFT LIVING ROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.1233430311309505,
          "pitch": 0.07344343103532225,
          "rotation": 0,
          "target": "9-corridor-second-level"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-master-bedroom",
      "name": "MASTER BEDROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.6029735293384917,
          "pitch": 0.14366816745603295,
          "rotation": 0,
          "target": "9-corridor-second-level"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
