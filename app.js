var app = angular.module('weatherApp', []);

app.controller('WeatherController', ['$scope', '$http', function($scope, $http) {
    $scope.city = '';
    $scope.weatherData = null;
    $scope.errorMessage = '';
    $scope.favorites = [];

    const API_KEY = '966359e4c7d0378b08d4b71e20fc99ea'; // Replace with your OpenWeatherMap API key

    $scope.getWeather = function(city) {
        const cityName = city || $scope.city;
        if (!cityName) {
            $scope.errorMessage = 'Please enter a city name.';
            return;
        }

        const url = `https://api.openweathermap.org/data/2.5/weather?q=Warangal&appid=966359e4c7d0378b08d4b71e20fc99ea&units=metric`;
        console.log("Fetching weather data for:", cityName); // Debugging line

        $http.get(url)
            .then(function(response) {
                console.log("API Response:", response); // Debugging line
                $scope.weatherData = response.data;
                $scope.errorMessage = '';
            })
            .catch(function(error) {
                console.error("API Error:", error); // Debugging line
                $scope.weatherData = null;
                $scope.errorMessage = 'City not found or API call failed.';
            });
    };

    $scope.addFavorite = function() {
        if ($scope.favoriteCity && !$scope.favorites.includes($scope.favoriteCity)) {
            $scope.favorites.push($scope.favoriteCity);
            $scope.favoriteCity = '';
        }
    };
}]);