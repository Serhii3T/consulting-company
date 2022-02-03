const mapFunction = () => {
    //  Google map
    let mapBlock = document.getElementById("map")
    if (mapBlock != null) {
        let myLat = { lat: 49.589082963382026, lng: 34.557623598157264 };
        let image = {
            url: "./images/beetroot-sm.png",
            size: new google.maps.Size(20, 20),
        };
        let mapOptions = {
            // mapId: "8e0a97af9386fef",
            center: myLat,
            zoom: 17,
            mapTypeControl: false,
        };

        // Marker
        map = new google.maps.Map(mapBlock, mapOptions);
        let marker = new google.maps.Marker({position: myLat, map: map, icon: image, title: "Я Бурячок, не сомневайся",});

        // Info window
        const contentString =
            '<div id="content" class="map-title">' +
            '<div id="siteNotice" class="map-title__image">' +
            '<img src="./images/beetroot.jpg" alt="beetroot">' +
            "</div>" +
            '<div id="bodyContent" class="map-title__info">' +
            '<h1 id="firstHeading" class="firstHeading">BEETROOT</h1>' +
            "<p><b>Beetroot Academy Poltava</b>, Інтенсивні ІТ-курси в <b>Шведсько-українській IT-школі</b>, " +
            "Розвивай власну кар'єру разом з Beetroot Academy. " +
            "де піклуються про кожного студента. " +
            "Отримуй нові навички в дружній атмосфері</p><br>" +
            '<p>Attribution: Beetroot Academy Poltava<br>' +
            'Tel: <a target="_blank" href="tel:380931702777"> +38 (093) 17 02 777 </a> <br>' +
            'Address: вулиця Котляревського 2а, Полтава, Полтавська область, 36000 <br>' +
            '<a target="_blank" href="https://beetroot.academy/?utm_source=GMB&utm_medium=Organic">' +
            "SITE: Beetroot.academy</a> " +
            "</div>" +
            "</div>";

        const infowindow = new google.maps.InfoWindow({
            content: contentString,
        });

        marker.addListener("click", () => {
            infowindow.open({
                anchor: marker,
                map,
                shouldFocus: false,
            });
        });

        // Add a style-selector control to the map.
        const styleControl = document.getElementById("style-selector-control");
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(styleControl);

        // Styles
        const styles = {
            default: [],
            silver: [
                {
                    elementType: "geometry",
                    stylers: [{ color: "#f5f5f5" }],
                },
                {
                    elementType: "labels.icon",
                    stylers: [{ visibility: "off" }],
                },
                {
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#616161" }],
                },
                {
                    elementType: "labels.text.stroke",
                    stylers: [{ color: "#f5f5f5" }],
                },
                {
                    featureType: "administrative.land_parcel",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#bdbdbd" }],
                },
                {
                    featureType: "poi",
                    elementType: "geometry",
                    stylers: [{ color: "#eeeeee" }],
                },
                {
                    featureType: "poi",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#757575" }],
                },
                {
                    featureType: "poi.park",
                    elementType: "geometry",
                    stylers: [{ color: "#e5e5e5" }],
                },
                {
                    featureType: "poi.park",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#9e9e9e" }],
                },
                {
                    featureType: "road",
                    elementType: "geometry",
                    stylers: [{ color: "#ffffff" }],
                },
                {
                    featureType: "road.arterial",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#757575" }],
                },
                {
                    featureType: "road.highway",
                    elementType: "geometry",
                    stylers: [{ color: "#dadada" }],
                },
                {
                    featureType: "road.highway",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#616161" }],
                },
                {
                    featureType: "road.local",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#9e9e9e" }],
                },
                {
                    featureType: "transit.line",
                    elementType: "geometry",
                    stylers: [{ color: "#e5e5e5" }],
                },
                {
                    featureType: "transit.station",
                    elementType: "geometry",
                    stylers: [{ color: "#eeeeee" }],
                },
                {
                    featureType: "water",
                    elementType: "geometry",
                    stylers: [{ color: "#c9c9c9" }],
                },
                {
                    featureType: "water",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#9e9e9e" }],
                },
            ],
            night: [
                { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
                { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
                { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
                {
                    featureType: "administrative.locality",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#d59563" }],
                },
                {
                    featureType: "poi",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#d59563" }],
                },
                {
                    featureType: "poi.park",
                    elementType: "geometry",
                    stylers: [{ color: "#263c3f" }],
                },
                {
                    featureType: "poi.park",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#6b9a76" }],
                },
                {
                    featureType: "road",
                    elementType: "geometry",
                    stylers: [{ color: "#38414e" }],
                },
                {
                    featureType: "road",
                    elementType: "geometry.stroke",
                    stylers: [{ color: "#212a37" }],
                },
                {
                    featureType: "road",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#9ca5b3" }],
                },
                {
                    featureType: "road.highway",
                    elementType: "geometry",
                    stylers: [{ color: "#746855" }],
                },
                {
                    featureType: "road.highway",
                    elementType: "geometry.stroke",
                    stylers: [{ color: "#1f2835" }],
                },
                {
                    featureType: "road.highway",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#f3d19c" }],
                },
                {
                    featureType: "transit",
                    elementType: "geometry",
                    stylers: [{ color: "#2f3948" }],
                },
                {
                    featureType: "transit.station",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#d59563" }],
                },
                {
                    featureType: "water",
                    elementType: "geometry",
                    stylers: [{ color: "#17263c" }],
                },
                {
                    featureType: "water",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#515c6d" }],
                },
                {
                    featureType: "water",
                    elementType: "labels.text.stroke",
                    stylers: [{ color: "#17263c" }],
                },
            ],
            retro: [
                { elementType: "geometry", stylers: [{ color: "#ebe3cd" }] },
                { elementType: "labels.text.fill", stylers: [{ color: "#523735" }] },
                { elementType: "labels.text.stroke", stylers: [{ color: "#f5f1e6" }] },
                {
                    featureType: "administrative",
                    elementType: "geometry.stroke",
                    stylers: [{ color: "#c9b2a6" }],
                },
                {
                    featureType: "administrative.land_parcel",
                    elementType: "geometry.stroke",
                    stylers: [{ color: "#dcd2be" }],
                },
                {
                    featureType: "administrative.land_parcel",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#ae9e90" }],
                },
                {
                    featureType: "landscape.natural",
                    elementType: "geometry",
                    stylers: [{ color: "#dfd2ae" }],
                },
                {
                    featureType: "poi",
                    elementType: "geometry",
                    stylers: [{ color: "#dfd2ae" }],
                },
                {
                    featureType: "poi",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#93817c" }],
                },
                {
                    featureType: "poi.park",
                    elementType: "geometry.fill",
                    stylers: [{ color: "#a5b076" }],
                },
                {
                    featureType: "poi.park",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#447530" }],
                },
                {
                    featureType: "road",
                    elementType: "geometry",
                    stylers: [{ color: "#f5f1e6" }],
                },
                {
                    featureType: "road.arterial",
                    elementType: "geometry",
                    stylers: [{ color: "#fdfcf8" }],
                },
                {
                    featureType: "road.highway",
                    elementType: "geometry",
                    stylers: [{ color: "#f8c967" }],
                },
                {
                    featureType: "road.highway",
                    elementType: "geometry.stroke",
                    stylers: [{ color: "#e9bc62" }],
                },
                {
                    featureType: "road.highway.controlled_access",
                    elementType: "geometry",
                    stylers: [{ color: "#e98d58" }],
                },
                {
                    featureType: "road.highway.controlled_access",
                    elementType: "geometry.stroke",
                    stylers: [{ color: "#db8555" }],
                },
                {
                    featureType: "road.local",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#806b63" }],
                },
                {
                    featureType: "transit.line",
                    elementType: "geometry",
                    stylers: [{ color: "#dfd2ae" }],
                },
                {
                    featureType: "transit.line",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#8f7d77" }],
                },
                {
                    featureType: "transit.line",
                    elementType: "labels.text.stroke",
                    stylers: [{ color: "#ebe3cd" }],
                },
                {
                    featureType: "transit.station",
                    elementType: "geometry",
                    stylers: [{ color: "#dfd2ae" }],
                },
                {
                    featureType: "water",
                    elementType: "geometry.fill",
                    stylers: [{ color: "#b9d3c2" }],
                },
                {
                    featureType: "water",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#92998d" }],
                },
            ],
            hiding: [
                {
                    featureType: "poi.business",
                    stylers: [{ visibility: "off" }],
                },
                {
                    featureType: "transit",
                    elementType: "labels.icon",
                    stylers: [{ visibility: "off" }],
                },
            ],
        };

        // Set the map's style to the initial value of the selector.
        const styleSelector = document.getElementById("style-selector");
        map.setOptions({ styles: styles[styleSelector.value] });

        // Apply new JSON when the user selects a different style.
        styleSelector.addEventListener("change", () => {
            map.setOptions({ styles: styles[styleSelector.value] });
        });
    }

}

export default mapFunction;