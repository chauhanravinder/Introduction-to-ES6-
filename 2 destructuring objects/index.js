const player = {
    name: 'Lebron James',
    club: 'LA Lakers',
    address: {
      city: 'Los Angeles'
    }
  };
  
  console.log( player.address.city );
  
//   player.name
//   player.club
// player.address.city

// object destructring
const {name, club, address: {city}} = player;

console.log(`${name} plays for ${club}`);
console.log(`${name} lives in ${city}`);