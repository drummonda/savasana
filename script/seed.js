'use strict'

const db = require('../server/db')
const { User, Studio, Teacher, Class } = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')
  // Whoa! Because we `await` the promise that db.sync returns, the next line will not be
  // executed until that promise resolves!
  const users = await Promise.all([
    User.create({
      firstName: "Andrew",
      lastName: "Drummond",
      email: "andrew@drummond.com",
      password: "password",
      address: "123 Alpaca Lane, Llama City, CA 27723"
    }),
    User.create({
      firstName: "Matt",
      lastName: "Krepp",
      email: "matt@krepp.com",
      password: "password",
      address: "456 Sheep Avenue, Wool City, FL 64532"
    }),
    User.create({
      firstName: "Gini",
      lastName: "Salamat",
      email: "gini@salamat.com",
      password: "password",
      address: "789 Chinchilla Road, Fluffy City, NY 97564"
    }),
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)

  const studios = await Promise.all([
    Studio.create({
      name: "Modo Yoga NYC",
      description: "Craft beer activated charcoal taxidermy cray. Af cronut celiac microdosing, PBR&B banh mi distillery freegan you probably haven't heard of them seitan. Ugh tilde austin, leggings whatever twee letterpress polaroid butcher marfa pop-up gochujang raclette. Locavore pickled viral unicorn neutra butcher yuccie palo santo.",
      location: "New York City, New York",
    }),
    Studio.create({
      name: "Yoga Source",
      description: "Tacos stumptown bicycle rights forage iPhone, put a bird on it hella shabby chic keffiyeh celiac. Keytar flannel synth, whatever kickstarter vexillologist wolf adaptogen. Scenester kogi green juice, leggings chicharrones tousled meggings offal microdosing helvetica gastropub fanny pack cloud bread. Af shoreditch DIY, adaptogen umami snackwave distillery heirloom tote bag photo booth viral shabby chic.",
      location: "Richmond, Virginia",
      imageUrl: "https://static.wixstatic.com/media/bfd771_54ff42c2b3f64108bede2908722704a5~mv2_d_5833_2500_s_4_2.png/v1/fill/w_548,h_226,al_c,q_85,usm_0.66_1.00_0.01/largerlogo-700by300.webp"
    }),
    Studio.create({
      name: "Hot Yoga Richmond",
      description: "Semiotics enamel pin mustache blog, migas ramps fam. Tbh green juice etsy cloud bread roof party, vinyl skateboard selvage iceland. Scenester kale chips brooklyn lyft, four loko YOLO food truck williamsburg mlkshk swag snackwave gluten-free tacos. Intelligentsia VHS hella pok pok man bun you probably haven't heard of them try-hard locavore occupy thundercats post-ironic enamel pin chia. Meh bitters selvage raclette cliche stumptown iceland echo park poutine tumeric.",
      location: "Richmond, Virginia",
      imageUrl: "https://images.squarespace-cdn.com/content/v1/5a565b0ee45a7ca343e46284/1534909464895-LV9TMHL1R3AWAHFFMCAM/ke17ZwdGBToddI8pDm48kHqyDplP6eU-Khv-cERnCxxZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzCmUAGlMtuLepsF0YHzGvqUnPZQHoQG1JuaHXn2O6I92yK41iQ6FQ-SW3-WuQ_IYE/HYRNEWLOGO.png"
    })
  ])
  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!
  console.log(`seeded ${studios.length} users`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
