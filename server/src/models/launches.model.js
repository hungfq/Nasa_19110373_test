const launches = new Map();

let latestFlightNumber = 100;

const launch = {
  flightNumber: 100,
  mission: 'Kepler Exploration X',
  rocket: 'Explorer IS1',
  launchDate: new Date('Oct 29, 2022'),
  target: 'Kepler-422 b',
  customers: ['ZTM', 'NASA'],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

function existsLaunchWithId(launchID) {
  return launches.has(launchID);
}

function getAllLaunches() {
  return Array.from(launches.values());
}

function addNewLaunch(launch) {
  latestFlightNumber++;
  launches.set(latestFlightNumber, Object.assign(launch, {
    success: true,
    upcoming: true,
    customers: ['Zero to Mastery', 'NASA'],
    flightNumber: latestFlightNumber,
  }));
};

function abortLaunchById(launchID) {
  const aborted = launches.get(launchID);
  aborted.upcoming = false;
  aborted.success = false;
  return aborted;
};

module.exports = {
  getAllLaunches,
  addNewLaunch,
  existsLaunchWithId,
  abortLaunchById,
};