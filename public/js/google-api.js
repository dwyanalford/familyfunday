navigator.geolocation.getCurrentPosition(success);

        function success(position) {

            var GEOCODING = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + position.coords.latitude + '%2C' + position.coords.longitude + '&language=en';

            $.getJSON(GEOCODING).done(function(location) {
                $('#state').val(location.results[0].address_components[4].long_name);
                $('#city').val(location.results[0].address_components[2].long_name);

            })

        }