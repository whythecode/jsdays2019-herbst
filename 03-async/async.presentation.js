console.log('Async');

function getDataFromServer() {
  setTimeout(() => {
    const data = [
      {
        id: 1,
        firstname: 'Petra',
        lastname: 'Schmidt',
      },
      {
        id: 2,
        firstname: 'Klaus',
        lastname: 'Müller',
      },
    ];
    console.log(data);
  }, 1000);
}

getDataFromServer();
console.log('we called the function');

// Callbacks
function getDataFromServerAndDoSomething(callback) {
  setTimeout(() => {
    const data = [
      {
        id: 1,
        firstname: 'Petra',
        lastname: 'Schmidt',
      },
      {
        id: 2,
        firstname: 'Klaus',
        lastname: 'Müller',
      },
    ];

    callback(data);
  }, 1000);
}

getDataFromServerAndDoSomething(data => {
  console.log('I got the data', data);
});

// Promises
function getDataFromServerAndDoSomethingWithPromise() {
  return new Promise((resolve, reject) => {
    // throw new Error('my error');

    setTimeout(() => {
      const data = [
        {
          id: 1,
          firstname: 'Petra',
          lastname: 'Schmidt',
        },
        {
          id: 2,
          firstname: 'Klaus',
          lastname: 'Müller',
        },
      ];

      resolve(data);
      // reject({ error: 'Whoa!', type: 'super critical', });
    }, 1000);
  });
}

const result = getDataFromServerAndDoSomethingWithPromise();
console.log(result);

result
  .then(data => {
    console.log('Promise data: ', data);
    throw new Error();
    return (
      getDataFromServerAndDoSomethingWithPromise()
        // THIS LEADS TO DOOM:
        .then((a = false))
    );
  })
  .catch(e => {
    console.log('catching: ', e);
    return Promise.reject(e);
  })
  .then(data => {
    console.log('Second promise data: ', data);
    return data;
  })
  .catch(({ error, type }) => {
    console.log('Whoops, ', error, type);
  });

function createPromise() {
  return Promise.resolve('myValue');
  return Promise.reject('myValue');
}

const calls = [
  getDataFromServerAndDoSomethingWithPromise(),
  getDataFromServerAndDoSomethingWithPromise(),
  getDataFromServerAndDoSomethingWithPromise(),
  getDataFromServerAndDoSomethingWithPromise(),
  getDataFromServerAndDoSomethingWithPromise(),
];

Promise.all(calls)
  .then(allData => {
    console.log('ALL: ', allData);
  })
  .catch(e => {
    console.log('ERROR: ', e);
  });

Promise.race(calls).then(firstData => {
  console.log('First: ', firstData);
});

// async/await

(async () => {
  try {
    const sum = await Promise.all([
      getDataFromServerAndDoSomethingWithPromise(),
      getDataFromServerAndDoSomethingWithPromise(),
    ]);

    const data1 = await getDataFromServerAndDoSomethingWithPromise();
    console.log(data1);
    const data2 = await getDataFromServerAndDoSomethingWithPromise();
    console.log(data2);
    const data3 = await getDataFromServerAndDoSomethingWithPromise();
    console.log(data3);
    const data4 = await getDataFromServerAndDoSomethingWithPromise();
    console.log(data4);
  } catch (e) {
    console.log(e);
  }
})();
