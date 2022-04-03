import React, {useEffect} from "react";
import MenuBar from "./MenuBar"
import vaccineBG from "./assets/vaccine.png"
import vaccineTest from "./assets/2 ladies.png"

import "./styles/vax.css";

export default () => {
    useEffect(() => {
         //
         var map;

         function initMap() {
             // Create the map.
             var pyrmont = {
                 lat: 23.8701334,
                 lng: 90.2713944
             };
             if (navigator.geolocation) {
                 try {
                     navigator.geolocation.getCurrentPosition(function(position) {
                         var pyrmont = {
                             lat: position.coords.latitude,
                             lng: position.coords.longitude
                         };
                     });
                 } catch (err) {
         
                 }
             }
             map = new google.maps.Map(document.getElementById('map'), {
                 center: pyrmont,
                 zoom: 17
             });
         
             // Create the places service.
             var service = new google.maps.places.PlacesService(map);
         
             // Perform a nearby search.
             service.nearbySearch({
                     location: pyrmont,
                     radius: 4000,
                     type: ['hospital']
                 },
                 function(results, status, pagination) {
                     if (status !== 'OK') return;
         
                     createMarkers(results);
                     getNextPage = pagination.hasNextPage && function() {
                         pagination.nextPage();
                     };
                 });
         }
         
         function createMarkers(places) {
             var bounds = new google.maps.LatLngBounds();
             for (var i = 0, place; place = places[i]; i++) {
                 var image = {
                     url: place.icon,
                     size: new google.maps.Size(71, 71),
                     origin: new google.maps.Point(0, 0),
                     anchor: new google.maps.Point(17, 34),
                     scaledSize: new google.maps.Size(25, 25)
                 };
         
                 var marker = new google.maps.Marker({
                     map: map,
                     icon: image,
                     title: place.name,
                     position: place.geometry.location
                 });
                 bounds.extend(place.geometry.location);
             }
             map.fitBounds(bounds);
         }}, [])
    return (
	<>
    <div id="map"></div>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBUOeOifFyiLPQYANrBtqGnfk3CCjxMQKo&libraries=places&callback=initMap" async defer></script>
		<div className="vax">
			 <MenuBar />
             <img className ="bg"src={vaccineBG} alt="vaccine" />
             <div className="header-content-wrapper">
                 <div className="header-content">
                     <div className="header">
                         <h1>Vaccinations</h1>
                     </div>
                     
                     <div className="button">

                         <a href = "#">Pfizer</a>
                         <a href="#">Moderna</a>
                         <a href="#">JBJ</a> 
                     </div>
                     
                 </div>
             </div>

             <div className = "sec2">
                 <h2>Schedule your appointment today!</h2>
                 <img src = {vaccineTest} alt = "help"/>
                 
             </div>
             
             <div className = "finalSec">
             
                 <h2>Information</h2>
                 <a className = "cent"href="#">Centers Near Me</a>
                 <p>udohc;uodh;ucfhd;uchd;suhc;ufhe;hfure(random text, needs to be replaced)</p>
             </div>

             
		</div>
	</>
    )}