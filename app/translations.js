angular.module('myApp').run(['gettextCatalog', function (gettextCatalog) {
/* jshint -W100 */
    gettextCatalog.setStrings('fr', {"Creator":"Créateur","HOME":"ACCEUIL","Login":"Connexion","Logout":"Déconnexion","NEW PARTY":"NOUVELLE PARTIE","PLATFORMS":"PLATFORMES","Profile":"Compte","Register":"Inscription","Start":"Début"});
/* jshint +W100 */
}]);