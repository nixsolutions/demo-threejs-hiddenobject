var camera, scene, raycaster, renderer;

var mouse = new THREE.Vector2(),
  INTERSECTED;
var radius = 100,
  theta = 0;

var isUserInteracting = false,
  onMouseDownMouseX = 0,
  onMouseDownMouseY = 0,
  lon = 0,
  onMouseDownLon = 0,
  lat = 0,
  onMouseDownLat = 0,
  phi = 0,
  theta = 0,
  mouse,
  zero = {},
  raycaster,
  curentName,
  flagResetColor = false,
  windowHalfX = window.innerWidth / 2,
  windowHalfY = window.innerHeight / 2,
  targetRotation = 0,
  joystick,
  touchSelect = true,
  setST,
  listOfItems = [],
  loadCompliat = false,
  itemDelited = false,
  obj;

init();
animate();

function init() {

  var container, mesh;

  container = document.getElementById('container');

  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1100);
  camera.target = new THREE.Vector3(0, 0, 0);

  scene = new THREE.Scene();

  var geometry = new THREE.SphereGeometry(600, 60, 40);
  geometry.scale(-1, 1, 1);

  var material = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('assets/bg.jpg')
  });

  mesh = new THREE.Mesh(geometry, material);
  mesh.name = 'backGround';
  scene.add(mesh);

  raycaster = new THREE.Raycaster();

  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  var clock = new THREE.Clock();

  joystick = new VirtualJoystick({
    mouseSupport: true,
    stationaryBase: false,
    strokeStyle: 'grey',
    baseX: 100,
    baseY: 150,
    limitStickTravel: true,
    stickRadius: 45
  });

  var frameTime = 0;

  animate();

  function animate() {

    requestAnimationFrame(animate);
    frameTime = clock.getDelta();

    onPointerDownLon = lon;
    onPointerDownLat = lat;

    if (joystick.right()) {
      lon = onPointerDownLon + 60 * frameTime;
    }
    if (joystick.left()) {
      lon = onPointerDownLon - 60 * frameTime;
    }
    if (joystick.up()) {
      lat = onPointerDownLat + 60 * frameTime;
    }
    if (joystick.down()) {
      lat = onPointerDownLat - 60 * frameTime;
    }
  }

  document.addEventListener('mousedown', onDocumentMouseDown, false);
  document.addEventListener('mousemove', onDocumentMouseMove, false);
  document.addEventListener('mouseup', onDocumentMouseUp, false);
  document.addEventListener('wheel', onDocumentMouseWheel, false);
  document.addEventListener('touchstart', onDocumentTouchStart, false);
  document.addEventListener('touchend', onDocumentTouchEnd, false);
  window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function onDocumentMouseDown(event) {
  event.preventDefault();
  var intersects = raycaster.intersectObjects(scene.children);
  if (intersects.length < 3) {
    var intersection = intersects[0],
      obj = intersection.object;
    if (obj.name !== 'backGround') {
      obj.visible = false;
      selectedItem = document.getElementById(obj.name);
      selectedItem.style.textDecoration = 'line-through';
      selectedItem.style.color = '#936868';
      listOfItems.splice(listOfItems.indexOf(obj.name), 1);
      itemDelited = true;
    }
  }

  isUserInteracting = true;

  onPointerDownPointerX = event.clientX;
  onPointerDownPointerY = event.clientY;

  onPointerDownLon = lon;
  onPointerDownLat = lat;
}

function onDocumentTouchStart(event) {
  event.preventDefault();

  onPointerDownPointerX = event.touches[0].clientX;
  onPointerDownPointerY = event.touches[0].clientY;

  onPointerDownLon = lon;
  onPointerDownLat = lat;

  if (touchSelect) {
    mouse.x = (event.touches[0].clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.touches[0].clientY / window.innerHeight) * 2 + 1;
    var intersects = raycaster.intersectObjects(scene.children);

    if (intersects.length < 3 && intersects[0]) {

      var intersection = intersects[0],
        obj = intersection.object;
    }
  }
}

function onDocumentTouchEnd(event) {
  var selectedItem;
  mouse.x = (onPointerDownPointerX / window.innerWidth) * 2 - 1;
  mouse.y = -(onPointerDownPointerY / window.innerHeight) * 2 + 1;
  var intersects = raycaster.intersectObjects(scene.children);
  if (intersects.length < 3) {
    var intersection = intersects[0],
      obj = intersection.object;
    if (obj.name !== 'backGround') {
      obj.visible = false;
      selectedItem = document.getElementById(obj.name);
      selectedItem.style.textDecoration = 'line-through';
      selectedItem.style.color = '#936868';
      listOfItems.splice(listOfItems.indexOf(obj.name), 1);
      itemDelited = true;
      obj = undefined;
    }
    touchSelect = true;
  }
}

function onDocumentMouseMove(event) {

  event.preventDefault();
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
}

function onDocumentMouseUp(event) {
  isUserInteracting = false;
}

function onDocumentMouseWheel(event) {
  if (camera.fov + event.deltaY * 0.05 <= 90) {
    camera.fov += event.deltaY * 0.05;
    camera.updateProjectionMatrix();
  }
}


function animate() {

  requestAnimationFrame(animate);
  render();
  update();
}

function update() {
  if (listOfItems.length === 0 && loadCompliat && itemDelited) {
    console.log('Congratulation You win');
    itemDelited = false;
  }
  lat = Math.max(-85, Math.min(85, lat));
  phi = THREE.Math.degToRad(90 - lat);
  theta = THREE.Math.degToRad(lon);

  camera.target.x = 500 * Math.sin(phi) * Math.cos(theta);
  camera.target.y = 500 * Math.cos(phi);
  camera.target.z = 500 * Math.sin(phi) * Math.sin(theta);

  camera.lookAt(camera.target);

  renderer.render(scene, camera);
}

function render() {
  raycaster.setFromCamera(mouse, camera);

  var intersects = raycaster.intersectObjects(scene.children);
  if (intersects.length === 1 && flagResetColor && touchSelect) {
    scene.children.forEach(function(elem) {
      if (elem.name === curentName && elem.name !== 'backGround') {
        elem.material.color.r = 1;
      }
    });
  }

  if (intersects.length >= 1 && intersects.length < 2) {

    if (INTERSECTED !== intersects[0].object && touchSelect) {
      if (INTERSECTED) {
        if (intersects[0].object.name !== 'backGround') {
          curentName = intersects[0].object.name;
          flagResetColor = true;
        }
      }

      INTERSECTED = intersects[0].object;
    }
  } else {
    INTERSECTED = null;
  }

  renderer.render(scene, camera);
}
