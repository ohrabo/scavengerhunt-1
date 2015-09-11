angular.module('scavengerHunt')
  .controller('HuntsController', HuntsController)

HuntsController.$inject = ['Hunt', '$state']
function HuntsController (Hunt, $state) {

  var self = this;

  self.newHunt

  self.all = Hunt.query();

  self.showHunt = function (hunt) {
    Hunt.get({ id: hunt._id }, function (response) {
      self.hunt = response;
      $state.go('showHunt')
    });

  }

  self.createHunt = function () {
    Hunt.save(self.newHunt, function (response) {
      self.showHunt(response);
    });
  }

  self.deleteHunt = function (hunt) {
  // Hunt.delete(hunt._id, function (response) {
  //   console.log(response)
  // } )
}

  self.joinHunt = function(hunt) {
    data = { hunt_id: hunt._id, joinedHunt: { hunt_id: hunt._id, user_id: '' } } 
    Hunt.joined(data)
  }

}