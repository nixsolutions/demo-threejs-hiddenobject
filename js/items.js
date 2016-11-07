  var img_candlestick = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('assets/items/candlestick.png'),
    transparent: true
  });
  img_candlestick.map.minFilter = THREE.LinearFilter;
  var candlestick = new THREE.Mesh(new THREE.PlaneGeometry(86, 121), img_candlestick);
  candlestick.name = 'Candlestick';
  candlestick.scale.set(0.6, 0.45, 0.6);
  candlestick.position.set(-170, -7, 230);
  candlestick.rotation.set(0, -3, -0.05);
  scene.add(candlestick);


  var img_vase = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('assets/items/vase.png'),
    transparent: true,
    side: THREE.DoubleSide
  });
  img_vase.map.minFilter = THREE.LinearFilter;
  var vase = new THREE.Mesh(new THREE.PlaneGeometry(113, 100), img_vase);
  vase.name = 'Vase';
  vase.scale.set(0.7, 0.8, 0.8);
  vase.position.set(-130, -180, 280);
  vase.rotation.set(0.2, -0.15, 0.12);
  scene.add(vase);


  var img_rake = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('assets/items/fireplace_tools.png'),
    transparent: true,
    side: THREE.DoubleSide
  });
  img_rake.map.minFilter = THREE.LinearFilter;
  var rake = new THREE.Mesh(new THREE.PlaneGeometry(146, 293), img_rake);
  rake.name = 'Rake';
  rake.scale.set(0.3, 0.3, 0.3);
  rake.position.set(-20, -140, 180);
  rake.rotation.set(0.2, -0.15, 0);
  scene.add(rake);


  var img_telepfone = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('assets/items/telepfone.png'),
    transparent: true,
    side: THREE.DoubleSide
  });
  img_telepfone.map.minFilter = THREE.LinearFilter;
  var telepfone = new THREE.Mesh(new THREE.PlaneGeometry(142, 212), img_telepfone);
  telepfone.name = 'Telepfone';
  telepfone.scale.set(0.3, 0.3, 0.3);
  telepfone.position.set(40, -140, 130);
  telepfone.rotation.set(0.2, 3.2, 0);
  scene.add(telepfone);


  var img_oil_lamp = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('assets/items/oil_lamp.png'),
    transparent: true,
    side: THREE.DoubleSide
  });
  img_oil_lamp.map.minFilter = THREE.LinearFilter;
  var oil_lamp = new THREE.Mesh(new THREE.PlaneGeometry(86, 203), img_oil_lamp);
  oil_lamp.name = 'Oil Lamp';
  oil_lamp.scale.set(0.3, 0.3, 0.3);
  oil_lamp.position.set(110, -130, 130);
  oil_lamp.rotation.set(1.1, 1.4, -0.9);
  scene.add(oil_lamp);


  var img_horse = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('assets/items/horse.png'),
    transparent: true,
    side: THREE.DoubleSide
  });
  img_horse.map.minFilter = THREE.LinearFilter;
  var horse = new THREE.Mesh(new THREE.PlaneGeometry(309, 247), img_horse);
  horse.name = 'Horse';
  horse.scale.set(0.5, 0.5, 0.6);
  horse.position.set(-180, -180, 80);
  horse.rotation.set(-0.2, 1.9, 0.35);
  scene.add(horse);


  var img_spider_web = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('assets/items/spider_web.png'),
    transparent: true
  });
  img_spider_web.map.minFilter = THREE.LinearFilter;
  var spider_web = new THREE.Mesh(new THREE.PlaneGeometry(92, 65), img_spider_web);
  spider_web.name = 'Spider';
  spider_web.scale.set(0.5, 0.5, 0.6);
  spider_web.position.set(-320, 75, 70);
  spider_web.rotation.set(-0.2, 1.9, 0.35);
  scene.add(spider_web);


  var img_group = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('assets/items/group.png'),
    transparent: true,
    side: THREE.DoubleSide
  });
  img_group.map.minFilter = THREE.LinearFilter;
  var group = new THREE.Mesh(new THREE.PlaneGeometry(175, 157), img_group);
  group.name = 'Group';
  group.scale.set(0.32, 0.32, 0.32);
  group.position.set(-190, -80, 5);
  group.rotation.set(-0.2, 1.5, 0.16);
  scene.add(group);


  var img_teapot = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('assets/items/teapot.png'),
    transparent: true,
    side: THREE.DoubleSide
  });
  img_teapot.map.minFilter = THREE.LinearFilter;
  var teapot = new THREE.Mesh(new THREE.PlaneGeometry(109, 146), img_teapot);
  teapot.name = 'Teapot';
  teapot.scale.set(0.3, 0.3, 0.3);
  teapot.position.set(-130, -80, -10);
  teapot.rotation.set(-0.2, 1.5, 0.16);
  scene.add(teapot);


  var img_wood = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('assets/items/wood.png'),
    transparent: true
  });
  img_wood.map.minFilter = THREE.LinearFilter;
  var wood = new THREE.Mesh(new THREE.PlaneGeometry(395, 197), img_wood);
  wood.name = 'Wood';
  wood.scale.set(0.3, 0.3, 0.3);
  wood.position.set(-210, -205, 230);
  wood.rotation.set(0.9, -3.7, -0.6);
  scene.add(wood);

  var img_clock = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('assets/items/clock.png'),
    transparent: true
  });
  img_clock.map.minFilter = THREE.LinearFilter;
  var clock = new THREE.Mesh(new THREE.PlaneGeometry(43, 44), img_clock);
  clock.name = 'Clock';
  clock.scale.set(1, 1, 1);
  clock.position.set(-360, -205, 280);
  clock.rotation.set(0.9, -3.7, -0.6);
  scene.add(clock);

  var img_bucket = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('assets/items/bucket.png'),
    transparent: true
  });
  img_bucket.map.minFilter = THREE.LinearFilter;
  var bucket = new THREE.Mesh(new THREE.PlaneGeometry(182, 228), img_bucket);
  img_bucket.map.minFilter = THREE.LinearFilter;
  bucket.name = 'Bucket';
  bucket.scale.set(0.45, 0.5, 0.2);
  bucket.position.set(200, -210, 30);
  bucket.rotation.set(-0.1, -1.5, -0.2);
  scene.add(bucket);


  var img_book = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('assets/items/book.png'),
    transparent: true,
    side: THREE.DoubleSide
  });
  img_book.map.minFilter = THREE.LinearFilter;
  var book = new THREE.Mesh(new THREE.PlaneGeometry(135, 53), img_book);
  book.name = 'Book';
  book.scale.set(0.5, 0.5, 0.5);
  book.position.set(-300, -120, -240);
  book.rotation.set(-0.4, 0.4, 0.3);
  scene.add(book);


  var img_lamp = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('assets/items/lamp.png'),
    transparent: true
  });
  img_lamp.map.minFilter = THREE.LinearFilter;
  var lamp = new THREE.Mesh(new THREE.PlaneGeometry(1311, 911), img_lamp);
  lamp.name = 'Lamp';
  lamp.scale.set(0.07, 0.07, 0.07);
  lamp.position.set(-215, -30, -192);
  lamp.rotation.set(-0.3, 0.3, 0.14);
  scene.add(lamp);


  var img_teddy = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('assets/items/teddy.png'),
    transparent: true,
    side: THREE.DoubleSide
  });
  img_teddy.map.minFilter = THREE.LinearFilter;
  var teddy = new THREE.Mesh(new THREE.PlaneGeometry(115, 118), img_teddy);
  teddy.name = 'Teddy';
  teddy.position.x = 420;
  teddy.position.y = -225;
  teddy.position.z = -200;
  teddy.rotation.y = -0.7;
  scene.add(teddy);


  var img_bat = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('assets/items/bat.png'),
    transparent: true,
    side: THREE.DoubleSide
  });
  img_bat.map.minFilter = THREE.LinearFilter;
  var bat = new THREE.Mesh(new THREE.PlaneGeometry(30, 30), img_bat);
  bat.name = 'Bat';
  bat.position.x = 110;
  bat.position.y = 100;
  bat.position.z = -190;
  scene.add(bat);


  var img_ball = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('assets/items/ball.png'),
    transparent: true,
    side: THREE.DoubleSide
  });
  img_ball.map.minFilter = THREE.LinearFilter;
  var ball = new THREE.Mesh(new THREE.PlaneGeometry(40, 40), img_ball);
  ball.name = 'Ball';
  ball.position.x = -150;
  ball.position.y = -120;
  ball.position.z = -190;
  ball.rotation.x = 0.3;
  ball.rotation.y = 0.7;
  scene.add(ball);


  var img_poster = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('assets/items/poster.png'),
    transparent: true
  });
  img_poster.map.minFilter = THREE.LinearFilter;
  var poster = new THREE.Mesh(new THREE.PlaneGeometry(461, 345), img_poster);
  poster.name = 'Poster';
  poster.scale.set(0.1, 0.1, 0.1);
  poster.position.set(-90, -3, -190);
  poster.rotation.set(0, -0.5, -0.01);
  scene.add(poster);


  var img_clock_old = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('assets/items/clock_old.png'),
    transparent: true,
    side: THREE.DoubleSide
  });
  img_clock_old.map.minFilter = THREE.LinearFilter;
  var clock_old = new THREE.Mesh(new THREE.PlaneGeometry(40, 40), img_clock_old);
  clock_old.name = 'Old clock';
  clock_old.position.x = 105;
  clock_old.position.y = -35;
  clock_old.position.z = -210;
  clock_old.rotation.y = -0.2;
  scene.add(clock_old);


  var img_old_frame = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('assets/items/stew.png'),
    transparent: true,
    side: THREE.DoubleSide
  });
  img_old_frame.map.minFilter = THREE.LinearFilter;
  var old_frame = new THREE.Mesh(new THREE.PlaneGeometry(40, 40), img_old_frame);
  old_frame.name = 'Old frame';
  old_frame.position.x = 250;
  old_frame.position.y = -40;
  old_frame.position.z = -200;
  old_frame.rotation.y = -0.2;
  scene.add(old_frame);


  var img_frame = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('assets/items/frame.png'),
    transparent: true
  });
  img_frame.map.minFilter = THREE.LinearFilter;
  var frame = new THREE.Mesh(new THREE.PlaneGeometry(191, 216), img_frame);
  frame.name = 'Frame';
  frame.scale.set(0.35, 0.4, 0.4);
  frame.position.set(10, -165, -190);
  frame.rotation.set(0, -0.18, -0.01);
  scene.add(frame);


  var img_cup = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('assets/items/cup.png'),
    transparent: true
  });
  img_cup.map.minFilter = THREE.LinearFilter;
  var cup = new THREE.Mesh(new THREE.PlaneGeometry(65, 65), img_cup);
  cup.name = 'Cup';
  cup.scale.set(0.4, 0.4, 0.4);
  cup.position.set(120, -165, -190);
  cup.rotation.set(0, -0.18, -0.01);
  scene.add(cup);


  var img_lock = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('assets/items/lock.png'),
    transparent: true,
    side: THREE.DoubleSide
  });
  img_lock.map.minFilter = THREE.LinearFilter;
  var lock = new THREE.Mesh(new THREE.PlaneGeometry(123, 91), img_lock);
  lock.name = 'Lock';
  lock.scale.set(0.2, 0.35, 0.4);
  lock.position.set(80, -165, -70);
  lock.rotation.set(-0.5, -1.1, -0.01);
  scene.add(lock);

  var itemContainer = document.createElement('div');
  itemContainer.id = 'containerItems'
  itemContainer.style.position = 'absolute';
  itemContainer.style.top = '0px';
  itemContainer.style.left = '0px';
  itemContainer.style.color = '#E4E4E4';
  itemContainer.style.padding = '5px 5px 5px 0px'
  itemContainer.style.fontSize = '15px';
  itemContainer.style.width = '100%';
  itemContainer.style.fontFamily = 'Arial';
  itemContainer.style.textAlign = 'center';
  itemContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';

  container.appendChild(itemContainer);

  var leftVar = 10;
  var topVar = 10;
  for (var i = 0; i < scene.children.length; i++) {
    loadCompliat = true;
    if (scene.children[i].name !== "backGround") {
      var item = scene.children[i].name;
      item = document.createElement('div');
      item.id = scene.children[i].name;
      item.style.display = 'inline-block';
      item.style.padding = '3px 10px 3px 10px';
      // item.style.width = '16.6%';
      item.innerHTML = scene.children[i].name;
      listOfItems.push(scene.children[i].name);
      itemContainer.appendChild(item);
    }
  }
