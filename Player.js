﻿var Player = (function () {
    function Player(name) {
        this.name = name;
        //name: string;
        this.hand = new Array();
        this.discard = new Array();
        this.deck = new Array();
        this.deck.push(new Estate());
        this.deck.push(new Estate());
        this.deck.push(new Estate());
        this.deck.push(new Copper());
        this.deck.push(new Copper());
        this.deck.push(new Copper());
        this.deck.push(new Copper());
        this.deck.push(new Copper());
        this.deck.push(new Copper());
        this.deck.push(new Copper());
    }
    // ***** Public functions
    Player.prototype.drawCards = function (n) {
        for (var i = 0; i < n; i++) {
            this._drawCard();
        }
    };

    // ***** Private helper functions
    Player.prototype._drawCard = function () {
        if (this.deck.length == 0) {
            this.deck = this.discard;
            this.discard = new Array;
        }

        if (this.deck.length == 0) {
            Utility.Message("No cards left to draw!");
            return false;
        }

        this.hand.push(Utility.DrawRandomCard(this.deck));

        return true;
    };
    return Player;
})();
//# sourceMappingURL=Player.js.map
