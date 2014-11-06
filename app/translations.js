angular.module('myApp').run(['gettextCatalog', function (gettextCatalog) {
/* jshint -W100 */
    gettextCatalog.setStrings('fr', {"HOME":"ACCEUIL","Login":"Connexion","Logout":"Déconnexion","NEW PARTY":"NOUVELLE PARTIE","Profile":"Compte","Register":"Inscription"});
/* jshint +W100 */
}]);