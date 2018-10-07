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
        window.alert(value);
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
        return actions.payment.execute().then(function() {
          // Show a confirmation message to the buyer
          window.alert('Thank you for your purchase!');
          document.querySelector('#submit').disabled=false;
        });
      }
    }, '#paypal-button');
