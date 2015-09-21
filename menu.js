(function(root, factory) {
  'use strict';

  if (typeof exports === 'object') {

    // CommonJS module
    // Load jQuery as a dependency
    var jQuery;
    try {jQuery = require('jquery'); } catch (e) {}

    module.exports = factory(jQuery);
  } else {
    root.Menu = factory(root.jQuery);
  }
}

(this, function($) {
  'use strict';

  var create = function create(menuTrigger) {
    return $('<div class="menu"><div class="menu__trigger">' + menuTrigger
      + '</div><ul class="menu__list"></ul></div>');
  };

  var eachItem = function eachItem() {
    var _this = this;
    var itm;

    $.each(this.options.list, function(i, item) {
      itm = '<li class="menu__item">'+ item +'</li>';
      _this.$menuList.append(itm);
    });
  };

  var addListners = function addListners() {
    var _this =  this;

    this.$menu.find('.menu__trigger').on('click', function(e) {
      e.stopPropagation();

      var $menu = $(this).closest('.menu');
      var wasClose = !($menu.hasClass('is-active'));

      $('.menu').removeClass('is-active');
      if (wasClose) {
        $menu.addClass('is-active');
      } else {
        $menu.removeClass('is-active');
      }
    });

    this.$menu.on('click', '.menu__item', function() {
      var $menu = $(this).closest('.menu');

      $menu.removeClass('is-active');

      if (typeof _this.options.onClick !== 'undefined')
      _this.options.onClick($(this));
    });

    if (typeof window.menuInit === 'undefined') {
      $(document).on('click', function() {
        $('.menu').removeClass('is-active');
      });

      window.menuInit = true;
    }
  };

  /**
   * @constructor
   */
  var Menu = function Menu(options) {
    this.options = $.extend(true, {}, DEFAULTS, options);

    this.$menu = create(this.options.menuTrigger);
    this.$menuList = this.$menu.find('.menu__list');

    if (this.options.openTo === 'left')
    this.$menu.addClass('menu--open-left');

    eachItem.call(this);
    addListners.call(this);

    this.options.field.html(this.$menu);
  };

  var DEFAULTS = {
    menuTrigger: 'menu',
    openTo: 'right',
    list: [],
  }

  return Menu;
}));

