;(function($) {
  new Menu({
    field: $('.menu-wrapper1'),
    list: [
      '<a href="">Signup</a>',
      '<a href="">Login</a>',
      '<a href="">Settings</a>',
      '<a href="">Accounts</a>',
      '<a href="">Billings</a>',
    ],
    menuTrigger: '---',
      onClick: function($node) {
      console.log($node);
    },
  });


  new Menu({
    field: $('.menu-wrapper2'),
    list: [
      '<a href="">Logout</a>',
    ],
    menuTrigger: '<i class="fa fa-calendar-plus-o"></i>',
    onClick: function($node) {
      console.log($node);
    },
    openTo: 'left',
  });

})(jQuery);
