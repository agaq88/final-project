google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawChart1);

function drawChart1() {

    

      var data = new google.visualization.DataTable();
      data.addColumn('number', 'Year');
    data.addColumn('number', 'Time');
        data.addColumn({type:'string', role:'tooltip'});

      data.addRows([
            [2014, 7377, 'Dennis Kimetto, 2:02:57, KENYA, Berlin, GER, September 28, 2014'],
            [2013, 7403, 'Wilson Kipsang, 2:03:23, KENYA, Berlin, GER, September 29, 2013'],
            [2011, 7418, 'Patrick Makau, 2:03:38, KENYA, Berlin, GER, September 25, 2011'],
            [2008, 7439, 'Haile Gebrselassie, 2:03:59, ETHIOPIA, Berlin, GER, September 28, 2008'],
            [2007, 7466, 'Haile Gebrselassie, 2:04:26, ETHIOPIA, Berlin, GER, September 30, 2007'],
            [2003, 7495, 'Paul Tergat, 2:04:55, KENYA, Berlin, GER, September 28, 2003'],
            [2002, 7538, 'Khalid Khannouchi, 2:05:38, MOROCCO, London, GBR, April 14, 2002'],
            [1999, 7542, 'Khalid Khannouchi, 2:05:42, MOROCCO, Chicago, CAN, October 24, 1999'],
            [1998, 7565, 'Ronaldo da Costa, 2:06:05, BRAZIL, Berlin, GER, September 20, 1998'],
            [1988, 7610, 'Belayneh Dinsamo, 2:06:50, ETHIOPIA, Rotterdam, NLD, April 17, 1988'],
            [1985, 7632, 'Carlos Lopes, 2:07:12, PORTUGAL, Rotterdam, NLD, April 20, 1985'],
            [1984, 7685, 'Steve Jones, 2:08:05, UNITED KINGDOM, Chicago, USA, October 21, 1984'],
            [1981, 7698, 'Robert De Castella, 2:08:18, AUSTRALIA, Fukuoka, JPN, December 6, 1981'],
            [1980, 7741, 'Gerard Nijboer, 2:09:01, NETHERLANDS, Amsterdam, NLD, April 26, 1980'],
            [1978, 7745, 'Shigeru So, 2:09:05, JAPAN, Beppu-Ōita, JPN, February 5, 1978'],
            [1974, 7752, 'Ian Thompson, 2:09:12, UNITED KINGDOM, Christchurch, NZL, January 31, 1974'],
            [1970, 7768, 'Ron Hill, 2:09:28, UNITED KINGDOM, Edinburgh, SCO, July 23, 1970'],
            [1969, 7713, 'Derek Clayton, 2:08:33, AUSTRALIA, ANTWERP, BEL, May 30, 1969'],
            [1967, 7776, 'Derek Clayton, 2:09:36, AUSTRALIA, Fukuoka, JPN, December 3, 1967'],
            [1965, 7920, 'Morio Shigematsu, 2:12:00, JAPAN, Polytechnic, GBR, June 12, 1965'],
            [1964, 7932, 'Abebe Bikila, 2:12:12, ETHIOPIA, TOKYO, JPN, October 21, 1964'],
            [1964, 8035, 'Basil Heatley, 2:13:55, UNITED KINGDOM, Polytechnic, GBR, June 13, 1964'],
            [1963, 8083, 'Brian Kilby, 2:14:43, UNITED KINGDOM, Port Talbot, GBR, July 6, 1963'],
            [1963, 8068, 'Leonard Edelen, 2:14:28, UNITED STATES,  Polytechnic, GBR, June 15, 1963'],
            [1963, 8115, 'Toru Terasawa, 2:15:15, JAPAN, Beppu-Ōita, JPN, February 17, 1963'],
            [1960, 8116, 'Abebe Bikila, 2:15:16, ETHIOPIA, Rome, ITA, September 10, 1960'],
            [1958, 8117, 'Sergei Popov, 2:15:17, SOVIET UNION, Stockholm, SWE, August 24, 1958'],
            [1956, 8284, 'Paaco Kotila, 2:18:04, FINLAND, Pieksämäki, FIN, August 12, 1956'],
            [1954, 8259, 'Jim Peters, 2:17:39, UNITED KINGDOM, Polytechnic, GBR, June 26, 1954'],
            [1953, 8314, 'Jim Peters, 2:18:34, UNITED KINGDOM, Turku, FIN, October 4, 1953'],
            [1953, 8320, 'Jim Peters, 2:18:40, UNITED KINGDOM, Polytechnic, GBR, June 13, 1953'],
            [1952, 8442, 'Jim Peters, 2:20:42, UNITED KINGDOM, Polytechnic, GBR, June 14, 1952'],
            [1947, 8739, 'Suh Yun-bok, 2:25:39, KOREA, Boston, USA, April 19, 1947'],
            [1935, 8802, 'Sohn Kee Chung, 2:26:42, JAPAN, Tokyo, JPN, November 3, 1935'],
            [1935, 8804, 'Yasuo Ikenaka, 2:26:44, JAPAN, Tokyo, JPN, April 3, 1935'],
            [1935, 8869, 'Fusashige Suzuki, 2:27:49, JAPAN, Tokyo, JPN, March 31, 1935'],
            [1935, 8774, 'Son Kitei, 2:26:14, JAPAN, Tokyo, JPN, March 21, 1935'],
            [1929, 9057, 'Harry Payne, 2:30:57, UNITED KINGDOM, London, GBR, July 5, 1929'],
            [1925, 8941, 'Albert Michelsen, 2:29:01, UNITED STATES, Port Chester, USA, October 12, 1925'],
            [1920, 9155, 'Hannes Kolehmainen, 2:32:35, FINLAND, Antwerp, BEL, August 22, 1920'],
            [1914, 9480, 'Umberto Blasi, 2:38:00, ITALY, Legnano, ITA, November 29, 1914'],
            [1913, 9368, 'Alexis Ahlgren, 2:36:06, SWEDEN, Polytechnic, GBR, May 31, 1913'],
            [1913, 9496, 'Harry Green, 2:38:16, UNITED KINGDOM, Polytechnic, GBR, May 12, 1913'],
            [1909, 9634, 'Thure Johansson, 2:40:34, SWEDEN, Stockholm, SWE, August 31, 1909'],
            [1909, 9751, 'Henry Barrett, 2:42:31, UNITED KINGDOM, Polytechnic, GBR, May 26, 1909'],
            [1909, 9964, 'Albert Raines, 2:46:04, UNITED STATES, New York City, USA, May 8, 1909'],
            [1909, 10012, 'James Clark, 2:46:52, UNITED STATES, New York City, USA, February 12, 1909'],
            [1909, 10365, 'Robert Fowler, 2:52:45, UNITED STATES, New York, USA, January 1, 1909'],
            [1908, 10518, 'Johnny Hayes, 2:55:18, UNITED STATES, London, USA, July 24, 1908']
      ]);

      var options = {
            hAxis: {
                title: 'YEAR',
                format: '####',
                titleTextStyle: {color: 'black', italic: false,  fontSize: 18},
                textStyle: {color: 'black'},
                gridlines: {color: 'transparent'},
                baselineColor: 'black',
                minValue: 1900,
                maxValue: 2020
            },

         vAxis: {
                title: 'TIME',
                format: '######',
                titleTextStyle: {color: 'black', italic: false, fontSize: 18},
                textStyle: {color: 'black'},
                gridlines: {color: 'transparent'},
                baselineColor: 'black',
                minValue: 6900,
                maxValue: 10800,
                ticks: [
                    {v: 7200, f: '2:00:00'},
                    {v: 7800, f: '2:10:00'},
                    {v: 8400, f: '2:20:00'},
                    {v: 9000, f: '2:30:00'},
                    {v: 9600, f: '2:40:00'},
                    {v: 10200, f: '2:50:00'},
                    {v: 10800, f: '3:00:00'}
                ]
      },
legend: 'none',
              backgroundColor: { fill:'#F5F5F5' },
              colors: ['#F08080'],
              chartArea: {top:10, width: '80%', height: '90%'},
              trendlines: {
              0: {
              type: 'polynomial',
              lineWidth: 3,
              color: '#6495ED',
              tooltip: false
                }
              },
          
          };



      var chart = new google.visualization.ScatterChart(document.getElementById('chart_div'));
      google.visualization.events.addListener(chart, 'onmouseover', function(e){
              $('svg *:contains("y =")').each(function(){
                  $(this).text('');
              });
          });

      chart.draw(data, options);} 


    $(window).resize(function(){
          drawChart1();
        });


$(document).ready(function() {
  $('.readmore').on('click', function(event){
        event.preventDefault();
    $('#show-this-on-click').slideDown();
    $('.readmore').hide();
    $('.readless').show();
  });
  $('.readless').on('click', function(event){
        event.preventDefault();
        $('#show-this-on-click').slideUp();
    $('.readless').hide();
    $('.readmore').show();
  });

 

$('.viewmore1').on('click', function(event){
        event.preventDefault();
    $('#show-this-on-click1').slideDown();
    $('.viewmore1').hide();
    $('.viewless1').show();
    $('.c2, .c3').hide('slow');
    // $('.c1').css({"margin-left": "35%"});
    });

  $('.viewless1').on('click', function(event){
        event.preventDefault();
        $('#show-this-on-click1').slideUp();
    $('.viewless1').hide();
    $('.viewmore1').show();
    $('.c2').show('slow');
    $('.c3').show('slow');
    // $('.c1').css({"margin-left": "auto"});
  });

  $('.viewmore2').on('click', function(event){
        event.preventDefault();
    $('#show-this-on-click2').slideDown();
    $('.viewmore2').hide();
    $('.viewless2').show();
    $('.c1').hide('slow');
    $('.c3').hide('slow');
    // $('.c2').css({"margin-left": "35%"});
  });
  $('.viewless2').on('click', function(event){
        event.preventDefault();
        $('#show-this-on-click2').slideUp();
    $('.viewless2').hide();
    $('.viewmore2').show();
    $('.c1').show('slow');
    $('.c3').show('slow');
    // $('.c2').css({"margin-left": "auto"});
  });

  $('.viewmore3').on('click', function(event){
        event.preventDefault();
    $('#show-this-on-click3').slideDown();
    $('.viewmore3').hide();
    $('.viewless3').show();
    $('.c1').hide('slow');
    $('.c2').hide('slow');
    // $('.c3').css({"margin-left": "35%"});

  });
  $('.viewless3').on('click', function(event){
        event.preventDefault();
        $('#show-this-on-click3').slideUp();
    $('.viewless3').hide();
    $('.viewmore3').show();
    $('.c1').show('slow');
    $('.c2').show('slow');
    // $('.c3').css({"margin-left": "auto"});
  });

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });



  $('.back').click(function(){
      parent.history.back();
      return false;
  });



$(window).scroll(function() {
        if ($('body').scrollTop() > 200) {
          $('.go-top').fadeIn(200);
        } else {
          $('.go-top').fadeOut(200);
        }
      });
      
     
      $('.go-top').click(function(event) {
        event.preventDefault();
        
        $('html, body').animate({scrollTop: 0}, 300);
      });

 });

  });
$(function() {

  $('#hamburger').on('click', function() {
   
    $('header nav').slideToggle();
  });
  });