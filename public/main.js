function getUserConfig(){
  console.log('Hello');
}  

function fetchSubscriptions(phoneNumber) {
  return fetch('/api/getCustomerInfo?phoneNumber=' + phoneNumber)
    .then(response => response.json())
}

function fetchSubscriptionOrders(subscriptionId) {
  return fetch('/api/getSubscriptionOrders?subscriptionId=' + subscriptionId)
    .then(response => response.json())
}


var app = new Vue({
  el: '#app',
  data: {
    title: 'Hello Vue!',
    phoneNumber: '',
    selectedSubscription: null,
    subscriptions: [],
    orders: [],
  },
  methods: {
    handleError: function(err) {
      alert(err.message);
    },
    getUserConfig: function() {
      fetchSubscriptions(this.phoneNumber)
        .then(data => {
          if(data.message) {
            this.handleError(data);
            this.subscriptions = [];
          } else {
            console.log('subscriptions here', data);
            this.subscriptions = data;
          }
        })
        .catch(alert)
    },
    closeOverlay: function() {
      this.selectedSubscription = null;
      this.orders = null;
    },
    getSubscriptionOrders: function(subscription) {
      const id = subscription.subscriptionId;
      fetchSubscriptionOrders(id)
        .then(data => {
          if(data.message) {
            this.handleError(data);
            this.orders = [];
          } else {
            this.orders = data;
            this.selectedSubscription = subscription;
          }
        })
        .catch(alert)
    }
  },
});