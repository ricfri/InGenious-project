var sceneIndex=1;function nextScene(e){element=document.getElementById(sceneIndex.toString()),element&&(element.style.display="none",sceneIndex+=1,document.getElementById(sceneIndex.toString()).style.display="initial")}function dragMoveListener(e){var t=e.target,a=(parseFloat(t.getAttribute("data-x"))||0)+e.dx,r=(parseFloat(t.getAttribute("data-y"))||0)+e.dy;t.style.webkitTransform=t.style.transform="translate("+a+"px, "+r+"px)",t.setAttribute("data-x",a),t.setAttribute("data-y",r)}interact.pointerMoveTolerance(5),interact(".dropzone").dropzone({accept:".yes-drop",overlap:.75,ondropactivate:function(e){e.target.classList.add("drop-active")},ondragenter:function(e){var t=e.relatedTarget;e.target.classList.add("drop-target"),t.classList.add("can-drop")},ondragleave:function(e){e.target.classList.remove("drop-target"),e.relatedTarget.classList.remove("can-drop")},ondrop:nextScene,ondropdeactivate:function(e){e.target.classList.remove("drop-active"),e.target.classList.remove("drop-target")}}),interact(".drag-drop").draggable({inertia:!0,restrict:{restriction:"parent",endOnly:!0,elementRect:{top:0,left:0,bottom:1,right:1}},autoScroll:!0,onmove:dragMoveListener});