      $( document ).ready(function() {
        $('#ex1').click(function(){
          $('#solution').val('{\r\n\t\"duration\": 325,\r\n\t\"pahDobMandatory\": false,\r\n\t\"sortFlags\": [\"cheapest\",\r\n\t\"fewest_connections\",\r\n\t\"shortest\"],\r\n\t\"segments\": [{\r\n\t\t\"name\": \"Eurostar\",\r\n\t\t\"number\": \"9022\",\r\n\t\t\"duration\": 136,\r\n\t\t\"segmentId\": \"1\",\r\n\t\t\"segmentType\": \"train\",\r\n\t\t\"originStationName\": \"London St-Pancras\",\r\n\t\t\"originStationId\": \"30230\",\r\n\t\t\"departureDateTime\": \"2015-05-20T11:31:00+0100\",\r\n\t\t\"icon\": \"\/img\/logo-icons\/TGT.png\",\r\n\t\t\"amenities\": [\"PRIORITY_CHECK-IN\",\r\n\t\t\"TAXI\",\r\n\t\t\"PLUGS\",\r\n\t\t\"FREE_DRINK\",\r\n\t\t\"NEWSPAPER\",\r\n\t\t\"MAGAZINES\",\r\n\t\t\"MEAL_INCLUDED\",\r\n\t\t\"SNACK_INCLUDED\",\r\n\t\t\"LOUNGE\",\r\n\t\t\"BAR_CAR\"],\r\n\t\t\"destinationStationId\": \"37048\",\r\n\t\t\"originLocationId\": \"67047\",\r\n\t\t\"originLocationName\": \"London\",\r\n\t\t\"destinationLocationName\": \"Paris\",\r\n\t\t\"arrivalDateTime\": \"2015-05-20T02:47:00+0200\",\r\n\t\t\"destinationStationName\": \"Paris Nord\",\r\n\t\t\"destinationLocationId\": \"68971\"\r\n\t},\r\n\t{\r\n\t\t\"name\": \"TGV Duplex\",\r\n\t\t\"number\": \"6621\",\r\n\t\t\"duration\": 123,\r\n\t\t\"segmentId\": \"2\",\r\n\t\t\"segmentType\": \"train\",\r\n\t\t\"originStationName\": \"Paris Gare Lyon\",\r\n\t\t\"originStationId\": \"37045\",\r\n\t\t\"departureDateTime\": \"2015-05-20T03:53:00+0200\",\r\n\t\t\"icon\": \"\/img\/logo-icons\/TGD.png\",\r\n\t\t\"amenities\": [\"FREE_DRINK\",\r\n\t\t\"PLUGS\",\r\n\t\t\"FREE_PARKING\",\r\n\t\t\"MAGAZINES\",\r\n\t\t\"VOUCHER\",\r\n\t\t\"LOUNGE\",\r\n\t\t\"BAR_CAR\"],\r\n\t\t\"destinationStationId\": \"36991\",\r\n\t\t\"originLocationId\": \"68971\",\r\n\t\t\"originLocationName\": \"Paris\",\r\n\t\t\"destinationLocationName\": \"Lyon\",\r\n\t\t\"arrivalDateTime\": \"2015-05-20T05:56:00+0200\",\r\n\t\t\"destinationStationName\": \"Lyon Part Dieu\",\r\n\t\t\"destinationLocationId\": \"67259\"\r\n\t}]\r\n}');
        });
        
        $('#ex2').click(function(){
          $('#solution').val('{\r\n\t\"duration\": 363,\r\n\t\"pahDobMandatory\": false,\r\n\t\"sortFlags\": [\"cheapest\",\r\n\t\"fewest_connections\",\r\n\t\"shortest\"],\r\n\t\"segments\": [{\r\n\t\t\"name\": \"TGV Duplex\",\r\n\t\t\"number\": \"6177\",\r\n\t\t\"duration\": 363,\r\n\t\t\"segmentId\": \"1\",\r\n\t\t\"segmentType\": \"train\",\r\n\t\t\"originStationName\": \"Paris Gare Lyon\",\r\n\t\t\"originStationId\": \"37045\",\r\n\t\t\"departureDateTime\": \"2015-05-20T02:19:00+0200\",\r\n\t\t\"icon\": \"\/img\/logo-icons\/TGD.png\",\r\n\t\t\"amenities\": [\"FREE_DRINK\",\r\n\t\t\"PLUGS\",\r\n\t\t\"FREE_PARKING\",\r\n\t\t\"MAGAZINES\",\r\n\t\t\"VOUCHER\",\r\n\t\t\"LOUNGE\",\r\n\t\t\"BAR_CAR\"],\r\n\t\t\"destinationStationId\": \"37204\",\r\n\t\t\"originLocationId\": \"68971\",\r\n\t\t\"originLocationName\": \"Paris\",\r\n\t\t\"destinationLocationName\": \"Monaco\",\r\n\t\t\"arrivalDateTime\": \"2015-05-20T08:22:00+0200\",\r\n\t\t\"destinationStationName\": \"Monaco Monte Carl\",\r\n\t\t\"destinationLocationId\": \"67866\"\r\n\t}]\r\n}');
        });
        
        $('#ex3').click(function(){
          $('#solution').val('{\r\n\t\"duration\": 377,\r\n\t\"pahDobMandatory\": false,\r\n\t\"sortFlags\": [],\r\n\t\"segments\": [{\r\n\t\t\"name\": \"TGV Duplex\",\r\n\t\t\"number\": \"6171\",\r\n\t\t\"duration\": 336,\r\n\t\t\"segmentId\": \"1\",\r\n\t\t\"segmentType\": \"train\",\r\n\t\t\"originStationName\": \"Paris Gare Lyon\",\r\n\t\t\"originStationId\": \"37045\",\r\n\t\t\"departureDateTime\": \"2015-05-20T07:19:00+0200\",\r\n\t\t\"icon\": \"\/img\/logo-icons\/TGD.png\",\r\n\t\t\"amenities\": [\"PLUGS\",\r\n\t\t\"BAR_CAR\"],\r\n\t\t\"destinationStationId\": \"37031\",\r\n\t\t\"originLocationId\": \"68971\",\r\n\t\t\"originLocationName\": \"Paris\",\r\n\t\t\"destinationLocationName\": \"Nice\",\r\n\t\t\"arrivalDateTime\": \"2015-05-20T12:55:00+0200\",\r\n\t\t\"destinationStationName\": \"Nice Ville\",\r\n\t\t\"destinationLocationId\": \"68447\"\r\n\t},\r\n\t{\r\n\t\t\"name\": \"TER \",\r\n\t\t\"number\": \"86031\",\r\n\t\t\"duration\": 18,\r\n\t\t\"segmentId\": \"2\",\r\n\t\t\"segmentType\": \"train\",\r\n\t\t\"originStationName\": \"Nice Ville\",\r\n\t\t\"originStationId\": \"37031\",\r\n\t\t\"departureDateTime\": \"2015-05-20T01:18:00+0200\",\r\n\t\t\"icon\": \"\/img\/logo-icons\/TER.png\",\r\n\t\t\"amenities\": [],\r\n\t\t\"destinationStationId\": \"37204\",\r\n\t\t\"originLocationId\": \"68447\",\r\n\t\t\"originLocationName\": \"Nice\",\r\n\t\t\"destinationLocationName\": \"Monaco\",\r\n\t\t\"arrivalDateTime\": \"2015-05-20T01:36:00+0200\",\r\n\t\t\"destinationStationName\": \"Monaco Monte Carl\",\r\n\t\t\"destinationLocationId\": \"67866\"\r\n\t}]\r\n}');
        });
        
        $('#ex4').click(function(){
          $('#solution').val('{\r\n\t\"duration\": 617,\r\n\t\"pahDobMandatory\": false,\r\n\t\"sortFlags\": [\"shortest\"],\r\n\t\"segments\": [{\r\n\t\t\"name\": \"Eurostar\",\r\n\t\t\"number\": \"9004\",\r\n\t\t\"duration\": 136,\r\n\t\t\"segmentId\": \"1\",\r\n\t\t\"segmentType\": \"train\",\r\n\t\t\"originStationName\": \"London St-Pancras\",\r\n\t\t\"originStationId\": \"30230\",\r\n\t\t\"departureDateTime\": \"2015-05-20T07:01:00+0100\",\r\n\t\t\"icon\": \"\/img\/logo-icons\/TGT.png\",\r\n\t\t\"amenities\": [\"PRIORITY_CHECK-IN\",\r\n\t\t\"TAXI\",\r\n\t\t\"PLUGS\",\r\n\t\t\"FREE_DRINK\",\r\n\t\t\"NEWSPAPER\",\r\n\t\t\"MAGAZINES\",\r\n\t\t\"MEAL_INCLUDED\",\r\n\t\t\"SNACK_INCLUDED\",\r\n\t\t\"LOUNGE\",\r\n\t\t\"BAR_CAR\"],\r\n\t\t\"destinationStationId\": \"37048\",\r\n\t\t\"originLocationId\": \"67047\",\r\n\t\t\"originLocationName\": \"London\",\r\n\t\t\"destinationLocationName\": \"Paris\",\r\n\t\t\"arrivalDateTime\": \"2015-05-20T10:17:00+0200\",\r\n\t\t\"destinationStationName\": \"Paris Nord\",\r\n\t\t\"destinationLocationId\": \"68971\"\r\n\t},\r\n\t{\r\n\t\t\"name\": \"TGV EST\",\r\n\t\t\"number\": \"9573\",\r\n\t\t\"duration\": 219,\r\n\t\t\"segmentId\": \"2\",\r\n\t\t\"segmentType\": \"train\",\r\n\t\t\"originStationName\": \"Paris EST\",\r\n\t\t\"originStationId\": \"37051\",\r\n\t\t\"departureDateTime\": \"2015-05-20T11:25:00+0200\",\r\n\t\t\"icon\": \"\/img\/logo-icons\/TGO.png\",\r\n\t\t\"amenities\": [\"TAXI\",\r\n\t\t\"PLUGS\",\r\n\t\t\"MEAL_INCLUDED\",\r\n\t\t\"WIFI_FREE\",\r\n\t\t\"BAR_CAR\"],\r\n\t\t\"destinationStationId\": \"43507\",\r\n\t\t\"originLocationId\": \"68971\",\r\n\t\t\"originLocationName\": \"Paris\",\r\n\t\t\"destinationLocationName\": \"Stuttgart\",\r\n\t\t\"arrivalDateTime\": \"2015-05-20T15:04:00+0200\",\r\n\t\t\"destinationStationName\": \"Stuttgart HBF\",\r\n\t\t\"destinationLocationId\": \"71764\"\r\n\t},\r\n\t{\r\n\t\t\"name\": \"Inter City Express\",\r\n\t\t\"number\": \"597\",\r\n\t\t\"duration\": 126,\r\n\t\t\"segmentId\": \"3\",\r\n\t\t\"segmentType\": \"train\",\r\n\t\t\"originStationName\": \"Stuttgart HBF\",\r\n\t\t\"originStationId\": \"43507\",\r\n\t\t\"departureDateTime\": \"2015-05-20T03:12:00+0200\",\r\n\t\t\"icon\": \"\/img\/logo-icons\/ICE.png\",\r\n\t\t\"amenities\": [\"PRIORITY_CHECK-IN\",\r\n\t\t\"TAXI\",\r\n\t\t\"NEWSPAPER\",\r\n\t\t\"AUDIO\",\r\n\t\t\"FOOD_DRINK_TROLLEY\",\r\n\t\t\"VIDEO\",\r\n\t\t\"LOUNGE\",\r\n\t\t\"BAR_CAR\"],\r\n\t\t\"destinationStationId\": \"43456\",\r\n\t\t\"originLocationId\": \"71764\",\r\n\t\t\"originLocationName\": \"Stuttgart\",\r\n\t\t\"destinationLocationName\": \"Munich\",\r\n\t\t\"arrivalDateTime\": \"2015-05-20T05:18:00+0200\",\r\n\t\t\"destinationStationName\": \"Muenchen Pasing\",\r\n\t\t\"destinationLocationId\": \"68188\"\r\n\t}]\r\n}');
        });
        
        $('#ex5').click(function(){
          $('#solution').val('{\r\n\t\"duration\": 344,\r\n\t\"pahDobMandatory\": false,\r\n\t\"sortFlags\": [\"cheapest\",\r\n\t\"fewest_connections\"],\r\n\t\"segments\": [{\r\n\t\t\"name\": \"Eurostar\",\r\n\t\t\"number\": \"9126\",\r\n\t\t\"duration\": 127,\r\n\t\t\"segmentId\": \"1\",\r\n\t\t\"segmentType\": \"train\",\r\n\t\t\"originStationName\": \"London St-Pancras\",\r\n\t\t\"originStationId\": \"30230\",\r\n\t\t\"departureDateTime\": \"2015-05-20T10:58:00+0100\",\r\n\t\t\"icon\": \"\/img\/logo-icons\/TGT.png\",\r\n\t\t\"amenities\": [\"PRIORITY_CHECK-IN\",\r\n\t\t\"TAXI\",\r\n\t\t\"PLUGS\",\r\n\t\t\"FREE_DRINK\",\r\n\t\t\"NEWSPAPER\",\r\n\t\t\"MAGAZINES\",\r\n\t\t\"MEAL_INCLUDED\",\r\n\t\t\"SNACK_INCLUDED\",\r\n\t\t\"LOUNGE\",\r\n\t\t\"BAR_CAR\"],\r\n\t\t\"destinationStationId\": \"14775\",\r\n\t\t\"originLocationId\": \"67047\",\r\n\t\t\"originLocationName\": \"London\",\r\n\t\t\"destinationLocationName\": \"Brussels\",\r\n\t\t\"arrivalDateTime\": \"2015-05-20T14:05:00+0200\",\r\n\t\t\"destinationStationName\": \"Bruxelles Midi\",\r\n\t\t\"destinationLocationId\": \"61821\"\r\n\t},\r\n\t{\r\n\t\t\"name\": \"Thalys\",\r\n\t\t\"number\": \"9397\",\r\n\t\t\"duration\": 110,\r\n\t\t\"segmentId\": \"2\",\r\n\t\t\"segmentType\": \"train\",\r\n\t\t\"originStationName\": \"Bruxelles Midi\",\r\n\t\t\"originStationId\": \"14775\",\r\n\t\t\"departureDateTime\": \"2015-05-20T15:52:00+0200\",\r\n\t\t\"icon\": \"\/img\/logo-icons\/TGH.png\",\r\n\t\t\"amenities\": [\"TAXI\",\r\n\t\t\"FREE_DRINK\",\r\n\t\t\"PLUGS\",\r\n\t\t\"NEWSPAPER\",\r\n\t\t\"FOOD_DRINK_TROLLEY\",\r\n\t\t\"WIFI_PURCHASE\",\r\n\t\t\"SNACK_INCLUDED\",\r\n\t\t\"WIFI_FREE\",\r\n\t\t\"LOUNGE\",\r\n\t\t\"BAR_CAR\"],\r\n\t\t\"destinationStationId\": \"19507\",\r\n\t\t\"originLocationId\": \"61821\",\r\n\t\t\"originLocationName\": \"Brussels\",\r\n\t\t\"destinationLocationName\": \"Amsterdam\",\r\n\t\t\"arrivalDateTime\": \"2015-05-20T16:42:00+0200\",\r\n\t\t\"destinationStationName\": \"Amsterdam CS\",\r\n\t\t\"destinationLocationId\": \"60322\"\r\n\t}]\r\n}');
        });
        
      });