// JavaScript Document

jQuery(document).ready(function() {

//JSON String for Hero Selector at the top
var source = [ { value: "/videos/abathur/",
                 label: "Abathur",
		 thumb:"images/champs/abathur.jpg"
               },
		{ 
		 value: "/videos/arthas/",
                 label: "Arthas",
		 thumb:"images/champs/arthas.jpg"
               },
		{ 
		 value: "/videos/barbarian/",
                 label: "Barbarian",
		 thumb:"images/champs/barbarian.jpg"
               },
		{ 
	         value: "/videos/brightwing/",
                 label: "Brightwing Faerie Dragon",
		 thumb:"images/champs/brightwing.jpg"
               },
		{ 
	         value: "/videos/demon-hunter/",
                 label: "Demon Hunter",
		 thumb:"/images/champs/demon-hunter.jpg"
               },
		{ 
		 value: "/videos/diablo/",
                 label: "Diablo",
		 thumb:"images/champs/diablo.jpg"
               },
		{ 
		 value: "/videos/etc/",
                 label: "E.T.C",
		 thumb:"images/champs/etc.jpg"
               },
		{ 
		 value: "/videos/falstad/",
                 label: "Falstad",
		 thumb:"images/champs/falstad.jpg"
               },
		{ 
		 value: "/videos/gazlowe/",
                 label: "Gazlowe",
		 thumb:"images/champs/gazlowe.jpg"
               },
		{ 
		 value: "/videos/illidan/",
                 label: "Illidan",
		 thumb:"images/champs/illidan.jpg"
               },
		{ 
		 value: "/videos/li-li/",
                 label: "Li Li",
		 thumb:"images/champs/li-li.jpg"
               },
		{ 
		 value: "/videos/malfurion/",
                 label: "Malfurion",
		 thumb:"images/champs/malfurion.jpg"
               },
		{ 
		 value: "/videos/muradin/",
                 label: "Muradin Mountain King",
		 thumb:"images/champs/muradin.jpg"
               },
		{ 
		 value: "/videos/nova/",
                 label: "Nova",
		 thumb:"images/champs/nova.jpg"
               },
		{ 
		 value: "/videos/raynor/",
                 label: "Raynor",
		 thumb:"images/champs/raynor.jpg"
               },
		{ 
		 value: "/videos/sgt-hammer/",
                 label: "Sgt. Hammer",
		 thumb:"images/champs/sgt-hammer.jpg"
               },
		{ 
		 value: "/videos/stitches/",
                 label: "Stitches",
		 thumb:"images/champs/stitches.jpg"
               },
		{ 
		 value: "/videos/tassadar/",
                 label: "Tassadar",
		 thumb:"images/champs/tassadar.jpg"
               },
		{ 
		 value: "/videos/tychus/",
                 label: "Tychus: Notorious Outlaw",
		 thumb:"images/champs/tychus.jpg"
               },
		{ 
		 value: "/videos/tyrael/",
                 label: "Tyrael Archangel of Justice",
		 thumb:"images/champs/tyrael.jpg"
               },
		{ 
		 value: "/videos/tyrande/",
                 label: "Tyrande",
		 thumb:"images/champs/tyrande.jpg"
               },
		{ 
		 value: "/videos/uther/",
                 label: "Uther",
		 thumb:"images/champs/uther.jpg"
               },
                { 
		 value: "/videos/witch-doctor/",
                 label: "Witch-doctor",
		 thumb:"images/champs/witch-doctor.jpg"
               },
		{ 
		 value: "/videos/zeratul/",
                 label: "Zeratul",
		 thumb:"images/champs/zeratul.jpg"
               }
             ];
             

//Skills for Talent Calculator. Only Tyrael is setup. 
var sourceThree =[ 
{
    "type": "tyrael",
    "info": {
        "label": "tyrael",
        "guide": "/tyrael",
        "thumb": "images/champs/tyrael.jpg"
    },
    "abilities": [
        {
            "name": "Punishing Blade</span><span>(Q)",
            "thumb": "images/tyrael/punishing-blade.png",
            "attr": "Deals 42 damage to enemeis within target area, slowing them by 25%<br/><br/>Reactivating while the blade is present will teleport Tyrael to his blade, dealing 42 damage and slowing enemies by 25% in an area around it.",
            "mod": "200"
        },
        {
            "name": "Righteousness</span><span>(W)",
            "thumb": "images/tyrael/righteousness.png",
            "attr": "Shields Tyrael, absorbing 225 damage for 4 seconds. When the shield expires it explodes dealing 102 damage to nearby enemies.",
            "mod": "300"
        },
        {
            "name": "Hand of Sacrifice</span><span>(E)",
            "thumb": "images/tyrael/hand-of-sacrifice.png",
            "attr": "Redirects the next 240 damage dealt to target ally to Tyrael instead. This damageis reduced by 25%.<br/><br/>Lats 10 seconds or until Tyrael and his ally are too far from each other.",
            "mod": "400"
        },
        {
            "name": "Archangel's Wrath",
            "thumb": "images/tyrael/archangels-wrath.png",
            "attr": "When Tyrael is about to die he becomes invulnerable and explodes after 4 seconds. Deals 240 damage to nearby enemies.",
            "mod": "500"
        }
    ],
    "skills": {
                "1": [{
                        "name": "Envenomed Nest Skill 1",
                        "thumb": "images/tyrael/punishing-blade.png",
                        "attr": "When Tyrael is about to die he becomes invulnerable and explodes after 4 seconds. Deals 240 damage to nearby enemies.",
                        "mod": "200",
                        "num": "1"
                        },
                        {
                        "name": "Bribe Skill 1",
                        "thumb": "images/tyrael/punishing-blade.png",
                        "attr": "When Tyrael is about to die he becomes invulnerable and explodes after 4 seconds. Deals 240 damage to nearby enemies.",
                        "mod": "200",
                        "num": "2"
                        },
                        {
                        "name": "Bribe Skill 1",
                        "thumb": "images/tyrael/punishing-blade.png",
                        "attr": "When Tyrael is about to die he becomes invulnerable and explodes after 4 seconds. Deals 240 damage to nearby enemies.",
                        "mod": "200",
                        "num": "3"
                        },
                        {
                        "name": "Bribe Skill 1",
                        "thumb": "images/tyrael/punishing-blade.png",
                        "attr": "When Tyrael is about to die he becomes invulnerable and explodes after 4 seconds. Deals 240 damage to nearby enemies.",
                        "mod": "200",
                        "num": "4"
                        }
                ],
                "4": [{
                        "name": "Envenomed Nest",
                        "thumb": "images/tyrael/punishing-blade.png",
                        "attr": "When Tyrael is about to die he becomes invulnerable and explodes after 4 seconds. Deals 240 damage to nearby enemies.",
                        "mod": "200",
                        "num": "1"
                        },
                        {
                        "name": "Bribe2",
                        "thumb": "images/tyrael/punishing-blade.png",
                        "attr": "When Tyrael is about to die he becomes invulnerable and explodes after 4 seconds. Deals 240 damage to nearby enemies.",
                        "mod": "200",
                        "num": "2"
                        },
                        {
                        "name": "Bribe2",
                        "thumb": "images/tyrael/punishing-blade.png",
                        "attr": "When Tyrael is about to die he becomes invulnerable and explodes after 4 seconds. Deals 240 damage to nearby enemies.",
                        "mod": "200",
                        "num": "3"
                        }
                ],
                "7": [{
                        "name": "Envenomed Nest",
                        "thumb": "images/tyrael/punishing-blade.png",
                        "attr": "When Tyrael is about to die he becomes invulnerable and explodes after 4 seconds. Deals 240 damage to nearby enemies.",
                        "mod": "200",
                        "num": "1"
                        },
                        {
                        "name": "Bribe2",
                        "thumb": "images/tyrael/punishing-blade.png",
                        "attr": "When Tyrael is about to die he becomes invulnerable and explodes after 4 seconds. Deals 240 damage to nearby enemies.",
                        "mod": "200",
                        "num": "2"
                        }
                ],
                "10": [{
                        "name": "Envenomed Nest",
                        "thumb": "images/tyrael/punishing-blade.png",
                        "attr": "When Tyrael is about to die he becomes invulnerable and explodes after 4 seconds. Deals 240 damage to nearby enemies.",
                        "mod": "200",
                        "num": "1"
                        }
                ],
                "13": [{
                        "name": "Envenomed Nest",
                        "thumb": "images/tyrael/punishing-blade.png",
                        "attr": "When Tyrael is about to die he becomes invulnerable and explodes after 4 seconds. Deals 240 damage to nearby enemies.",
                        "mod": "200",
                        "num": "1"
                        },
                        {
                        "name": "Bribe2",
                        "thumb": "images/tyrael/punishing-blade.png",
                        "attr": "When Tyrael is about to die he becomes invulnerable and explodes after 4 seconds. Deals 240 damage to nearby enemies.",
                        "mod": "200",
                        "num": "2"
                        }
                ],
                "16": [{
                        "name": "Envenomed Nest",
                        "thumb": "images/tyrael/punishing-blade.png",
                        "attr": "When Tyrael is about to die he becomes invulnerable and explodes after 4 seconds. Deals 240 damage to nearby enemies.",
                        "mod": "200",
                        "num": "1"
                        },
                        {
                        "name": "Bribe2",
                        "thumb": "images/tyrael/punishing-blade.png",
                        "attr": "When Tyrael is about to die he becomes invulnerable and explodes after 4 seconds. Deals 240 damage to nearby enemies.",
                        "mod": "200",
                        "num": "3"
                        }
                ],
                "20": [{
                        "name": "Envenomed Nest",
                        "thumb": "images/tyrael/punishing-blade.png",
                        "attr": "When Tyrael is about to die he becomes invulnerable and explodes after 4 seconds. Deals 240 damage to nearby enemies.",
                        "mod": "200",
                        "num": "1"
                        },
                        {
                        "name": "Bribe2",
                        "thumb": "images/tyrael/punishing-blade.png",
                        "attr": "When Tyrael is about to die he becomes invulnerable and explodes after 4 seconds. Deals 240 damage to nearby enemies.",
                        "mod": "200",
                        "num": "2"
                        },
                        {
                        "name": "Bribe2",
                        "thumb": "images/tyrael/punishing-blade.png",
                        "attr": "When Tyrael is about to die he becomes invulnerable and explodes after 4 seconds. Deals 240 damage to nearby enemies.",
                        "mod": "200",
                        "num": "3"
                        },
                        {
                        "name": "Bribe2",
                        "thumb": "images/tyrael/punishing-blade.png",
                        "attr": "When Tyrael is about to die he becomes invulnerable and explodes after 4 seconds. Deals 240 damage to nearby enemies.",
                        "mod": "200",
                        "num": "4"
                        }
                ]
    }
}
];


//Print Array as Champion Selector List
jQuery.each(sourceThree, function(){
         var thisInfo = this.info;   
         return jQuery( "#hero_selector" )
         .append( "<a data-name='" + thisInfo.thumb + "'>" + "<img width='50' height='50' src='" + thisInfo.thumb + "'/></a>" );
});


//Print Info for Selected Champion
jQuery.each(sourceThree, function(){
        //Tier 1 Select Hero
        if(this.type == "tyrael") {
                //Tier 2 Pick Info type
                jQuery.each(this.abilities, function(){
                        var thisAttr = this.attr;
                        var thisAttr = thisAttr.toString();
                        //Print info
                        return jQuery( "#skill_info_abilities ul" )
                        .append( "<li data-mod='" + this.mod + "' data-attr='" + thisAttr + "'><img src='" + this.thumb + "' alt=''/><p><span>" + this.name + "</span></p><p></p></li>" );
                });
                jQuery.each(this.skills, function(key, val){
                        console.log(key);
                        console.log(val);
                        //Print info
                        jQuery.each(val, function(){
                                return jQuery( ".skill-tree-branch[data-tier='" + key + "'" )
                                .append( "<a class='skill-tree-node'  data-num='" + this.num + "'  data-mod='" + this.mod + "' title='" + this.name + "' href='#' data-attr='" + this.attr + "'><img src='" + this.thumb + "' alt=''/><div class='talent-tooltip'></div></a>" );
                        });
                });
         }
});


//Print Toggle Icon for Ability Info with Description
jQuery("#skill_info_abilities ul li").each(function(){
        if(jQuery(this).data("attr")) {
                jQuery(this).append("<div class='toggle-info'>+</div>");
        }
});

//Toggle functionality for Ability Info  Description
jQuery("#skill_info_abilities ul li").on("click", function() {
   var dataAttr = jQuery(this).data("attr");
   if(dataAttr) {
        if(jQuery(this).hasClass("toggled")) {
                jQuery(this).find(".toggle-info").html("+");
                jQuery(this).removeClass("toggled");
                jQuery(this).find(".abil-descrip").remove();
        } else {
                jQuery(this).find(".toggle-info").html("-");
                jQuery(this).addClass("toggled");
                jQuery(this).find("p:last-of-type").append("<div class='abil-descrip'>" + dataAttr + "</div>");
        }
   }
});

//Skill Tree Toggle Functionality
jQuery(".skill-tree-node").on("click", function(e) {
      e.preventDefault();
      
      //grab shared data from clicked object
      var result   = jQuery(this).closest('.skill-tree-branch').find('.selected-node-info');
      var dataMod  = jQuery(this).data('mod');
      
      if(jQuery(this).hasClass("active")) {
                
                //remove old active in branch
                jQuery(this).closest(".skill-tree-branch").children(".skill-tree-node").removeClass("active");
                result.removeClass("active").html("");
                
                //remove number in the local branch
                jQuery(this).closest(".skill-tree-branch").find(".main-node").removeClass("number-selected").html("");
                
                //remove this mod in abilities
                jQuery("#skill_info_abilities ul li[data-mod*='" + dataMod + "']").find("p:nth-of-type(2)").html("");
                
                if (dataMod == 'ability') {
                      jQuery("#skill_info_abilities ul li:last-of-type").remove("");
                 }
                
      }else {
                //grab data from clicked object
                var dataAttr = jQuery(this).data('attr');
                var dataNum  = jQuery(this).data('num');
                var theTitle = jQuery(this).attr('title');
                var oldMod = jQuery(this).closest(".skill-tree-branch").find(".skill-tree-node.active").data("mod");
                var skillThumbnail = jQuery(this).find("img").attr("src");
                
                //remove old mod in abilities
                if(oldMod) {
                        jQuery("#skill_info_abilities ul li[data-mod*='" + oldMod + "']").find("p:nth-of-type(2)").html("");
                }
               
                //remove old active in this branch
                jQuery(this).closest(".skill-tree-branch").children(".skill-tree-node").removeClass("active");
                result.removeClass("active").html("");
               
                //set the number in the local branch
                jQuery(this).closest(".skill-tree-branch").find(".main-node").addClass("number-selected").html(dataNum);
                
                //set active in this branch
                jQuery(this).addClass("active");
                result.addClass("active").html(dataAttr);
                if (dataMod) {
                        if (dataMod == 'ability') {
                                jQuery("#skill_info_abilities ul").append("<li data-mod='ability' data-attr='" + dataAttr + "'><img src='" + skillThumbnail + "' alt=''/><p><span>" + theTitle + "</span><span></span></p><p></p><div class='toggle-info'>+</div></li>");
                        } else {
                                jQuery("#skill_info_abilities ul li[data-mod*='" + dataMod + "']").find("p:nth-of-type(2)").html("[" + theTitle + "]");
                        }
                }
      }
});

//hover tooltip
jQuery(".skill-tree-node").hover(function(e) {
      e.preventDefault();
      
      //cleanup old hover
      cleanupHover(".skill-tree-node");
      
      //grab data from hovered object
      var dataAttr = jQuery(this).data("attr");
      var theTitle = jQuery(this).attr("title");
      var dataTier = jQuery(this).closest(".skill-tree-branch").data("tier");
      var skillThumbnail = jQuery(this).find("img").attr("src");
      
      //build tooltip
      jQuery(this).addClass("hover");
      jQuery(this).find(".talent-tooltip").html("<img src='" + skillThumbnail + "'/><h3>" + theTitle + "</h3><h4><span>Tier:</span>" + dataTier + "</h4><p>" + dataAttr + "</p>");
   
   }, function(){
      cleanupHover(this);
});

//remove hover
function cleanupHover(x) {
      jQuery(x).removeClass("hover");
      jQuery(x).find(".talent-tooltip").html("");
}

//Calculate the Level and Appropriate Stat modifications
jQuery("#skill_info_calculation input").change(function() {

      //Get Value
      var rangeValue = jQuery(this).val();
      
      //Print value in #header_level
      jQuery("#hero_level").html(rangeValue);
      
      //Parse data objects
      jQuery.each(jQuery(".number"), function(){
      
        //get data for calculations
        var dataBase = jQuery(this).data("base");
        var dataGain = jQuery(this).data("gain");
      
        //calculations
        var calcInfo = dataBase + ((rangeValue - 1) * dataGain);
        
        //check if the number needs decimals or not
        if(calcInfo % 1 != 0) {
                calcInfo = calcInfo.toFixed(2)
        } else {
                calcInfo = Math.round(calcInfo)
        }
        
        //print calculations
        if(!dataGain | !dataBase){
                return
        } else {
                jQuery(this).html(calcInfo);
        }
      
      });
      
});
   
});
