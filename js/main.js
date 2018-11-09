(() => {
    //rework with a Vue instance

    const vm = new Vue({

        el : "#app",
        data : {
            modelname : "",
            modelpricing : "",
            modeldetails : ""
        },
        methods : {
            fetchData(e) {
             //   debugger;
                let targetURL = e.currentTarget.id; // gets the id of the element via the event object
        

                fetch(`./includes/connect.php?carModel=${targetURL}`) // go get data and bring it back! good doogy
        
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const { modelName, pricing, modelDetails } = data[0];

                    this.modelname = modelName;
                    this.modeldetails = modelDetails;
                    this.modelpricing = pricing;
                    // parseCarData(data[0]);
                })
                .catch(function(error) {
                    console.error(error);
                });
            }
        }

    })

    //grab the car button
    // const cars = document.querySelectorAll('.data-ref');


    // function parseCarData(car) {
    //     debugger;
    //     // take the database data and put it on the page
    //     const { modelName, pricing, modelDetails } = car;
    //     // take the database data and put it on the page
    //     document.querySelector(".modelName").textContent = modelName;
    //     document.querySelector(".priceInfo").textContent = pricing;
    //     document.querySelector(".modelDetails").textContent = modelDetails;
    // };

    // cars.forEach(car => car.addEventListener("click", fetchData));

    // //fetchData();
})();