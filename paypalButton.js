paypal.Button.render({
      // Configure environment
      env: 'sandbox',
      client: {
        sandbox: 'demo_sandbox_client_id',
        production: 'demo_production_client_id'
      },
      // Customize button (optional)
      locale: 'en_US',
      style: {
        size: 'small',
        color: 'gold',
        shape: 'pill',
      },
      // Set up a payment
      payment: function(data, actions) {
        var amount = document.querySelector('#amount');
        var value = amount.value;
        return actions.payment.create({
          transactions: [{
            amount: {
              total: value,
              currency: 'USD'
            }
          }]
        });
      },
      // Execute the payment
      onAuthorize: function(data, actions) {
        var amount = document.querySelector('#amount');
        var value = amount.value;
        return actions.payment.execute().then(function() {
          // Show a confirmation message to the buyer
          var button = document.querySelector('#submit');
          var confirmation = document.querySelector('#confirmation');
          button.disabled=false;
          button.style.opacity = 1.0;
          confirmation.innerHTML = "You have pledged " + value + "!";
        });
      }
    }, '#paypal-button');
