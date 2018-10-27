(() => {

    //grab the car button
    const cars = document.querySelectorAll('.data-ref');
    function fetchData() {
        let targetURL = `./includes/connect.php?carModel=${this.id}`;

        fetch(targetURL) // go get data and bring it back! good doogy

        .then(res => res.json())
        .then(data => {
            console.log(data);
            parseCarData(data[0]);
        })
        .catch(function(error) {
            console.error(error);
        });
    }

    function parseCarData(car) {
        debugger;
        // take the database data and put it on the page
        const { modelName, pricing, modelDetails } = car;
        // take the database data and put it on the page
        document.querySelector(".modelName").textContent = modelName;
        document.querySelector(".priceInfo").textContent = pricing;
        document.querySelector(".modelDetails").textContent = modelDetails;
    };

    cars.forEach(car => car.addEventListener("click", fetchData));

    //fetchData();
})();