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
        var selector = document.querySelector('#select');
        var selected = selector.options[selector.selectedIndex].value;
        window.alert(selected)
        return actions.payment.create({
          transactions: [{
            amount: {
              total: selected,
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
          document.querySelector('#test').innerHTML = "Success"
        });
      }
    }, '#paypal-button');