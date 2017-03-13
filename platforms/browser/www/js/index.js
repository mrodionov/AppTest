/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

function changelink(){
	var now = new Date();
	//alert(now.getDate()+"-"+now.getMonth()+"-"+now.getFullYear());
	var month = now.getMonth()+1;
	var str1 = "index.html#"+now.getDate()+"-"+month+"-"+now.getFullYear();
	if(month<10)str1 = "index.html#"+now.getDate()+"-0"+month+"-"+now.getFullYear();
	document.getElementById("today_link").href=str1;
}

function today(){
	var now = new Date();
	//alert(now.getDate()+"-"+now.getMonth()+"-"+now.getFullYear());
	var str1 = "index.html#"+now.getDate()+"-"+now.getMonth()+"-"+now.getFullYear();
	if(now.getMonth()<10)str1 = "index.html#"+now.getDate()+"-0"+now.getMonth()+"-"+now.getFullYear();
	location.href = str1;
}

$(function(){
  // Bind the swipeHandler callback function to the swipe event on div.box
  $( "div.page" ).on( "swipeleft", swipeleftHandler );
  $( "div.page" ).on( "swiperight", swiperightHandler );

  //arr =$( "div.page div h1" )

	//$( "div.page div h1" ).html(this.parent.parent.attr('id'));
	$( "div.page div h1" ).each(function(index, element){
		//console.log('Индекс элемента div: ' + index + '; id элемента = ' + $(element).html());
		if($(element).parent("div").parent("div").attr('id')){
			var tmp1 = $(element).parent("div").parent("div").attr('id');
			dates=tmp1.split('-');
			//fdate = new Date().toLocaleString('ru', {year: dates[2],month: dates[1], day: dates[0]});
			var tdate = new Date(dates[1]+","+dates[0]+","+dates[2]).toLocaleString('ru', {year: 'numeric', month: 'long', day: 'numeric'});
			$(element).html(tdate);
		//console.log('Индекс элемента div: ' + index + '; id элемента = ' + tdate); 		
		//console.log('Индекс элемента div: ' + index + '; id элемента = ' + fdate); 		
		//console.log('Индекс элемента div: ' + index + '; id элемента = ' + $(element).parent("div").parent("div").attr('id')); 		
		}
	})
  // Callback function references the event target and adds the 'swipe' class to it
  function swipeleftHandler( event ){
    //$( event.target ).addClass( "swipe" );
	var tmp = $( event.target ).attr('id');
	dates=tmp.split('-') 
    //var now1 = new Date($( event.target ).attr('id'));
    //var now = new Date(now1.getDate()+"-"+(now1.getMonth()+1)+"-"+now1.getFullYear());
    var now = new Date(dates[1]+","+dates[0]+","+dates[2]);
	now.setDate(now.getDate() + 1);
	//alert(now);
	var str1 = "index.html#"+now.getDate()+"-"+(now.getMonth()+1)+"-"+now.getFullYear();
	if(now.getMonth()<10)str1 = "index.html#"+now.getDate()+"-0"+(now.getMonth()+1)+"-"+now.getFullYear();
	$( ":mobile-pagecontainer" ).pagecontainer( "change", str1, { transition : "slide" } );
	//alert($( event.target ).attr('id'));
  }
  function swiperightHandler( event ){
    //$( event.target ).addClass( "swipe" );
	var tmp = $( event.target ).attr('id');
	dates=tmp.split('-') 
    //var now1 = new Date($( event.target ).attr('id'));
    //var now = new Date(now1.getDate()+"-"+(now1.getMonth()+1)+"-"+now1.getFullYear());
    var now = new Date(dates[1]+","+dates[0]+","+dates[2]);
	now.setDate(now.getDate() - 1);
	//alert(now);
	var str1 = "index.html#"+now.getDate()+"-"+(now.getMonth()+1)+"-"+now.getFullYear();
	if(now.getMonth()<10)str1 = "index.html#"+now.getDate()+"-0"+(now.getMonth()+1)+"-"+now.getFullYear();
	$( ":mobile-pagecontainer" ).pagecontainer( "change", str1, { transition : "slide", reverse : "true"} );
	//alert($( event.target ).attr('id'));
  }
});
