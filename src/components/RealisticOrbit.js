import * as THREE from 'three';

class RealisticOrbit {
  constructor({
    startGeometry,
    speed,
    distance,
    orbitAxis = new THREE.Vector3(),
    bodyMass = 1,
    satelliteMass = 1,
    angularMomentum = 1,
    position = new THREE.Vector3(),
  }) {
    this.startGeometry = startGeometry;
    this.speed = speed;
    this.distance = distance;
    this.orbitAxis = orbitAxis;
    this.bodyMass = bodyMass;
    this.satelliteMass = satelliteMass;
    this.angularMomentum = angularMomentum;
    this.position = position;
    this.resetTime = 0;
  }

  init() {
    this.reset();
    this.createGeometry();
    this.createMechanics();
    return this;
  }

  reset() {
    this.geom = this.startGeometry.clone();
    this.orbitAngle = 0;
  }

  createGeometry() {
    this.geom.translate(0, this.distance, 0);
  }

  createMechanics() {
    this.satellite = {
      position: new THREE.Vector3(),
      velocity: new THREE.Vector3(),
    };

    this.update = () => {
      this.orbitAngle += this.speed;

      const orbitRadius = this.distance;
      const angularVelocity = this.speed;

      const satelliteVelocity = new THREE.Vector3(
        -Math.sin(this.orbitAngle) * angularVelocity,
        0,
        Math.cos(this.orbitAngle) * angularVelocity
      );

      this.satellite.position.setFromCylindricalCoords(
        orbitRadius,
        satelliteVelocity.length(),
        this.orbitAngle
      );

      this.satellite.velocity.copy(satelliteVelocity);
    };
  }
}

export default RealisticOrbit;