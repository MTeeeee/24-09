// import React from 'react'

// function List() {

//     const list = ["Haus", "Maus", "Laus", "Wassermelone"]
//              //  [                      ]

//     const listHtml = list.map((element, index) => <li key={index}>{element}</li>)

//   return (
//     <div>
//         <ul>
//             {listHtml}
//         </ul>
//     </div>
//   )
// }

// export default List


function List() {

    const users = [
    { id: 1, name: "Anna", email: "anna@example.com" },
    { id: 2, name: "Ben", email: "ben@example.com" },
    { id: 3, name: "Chris", email: "chris@example.com" }
    ];

    const listHtml = users.map(user => <li key={user.id}> {user.name} {user.email}</li>)
    // const listHtml = users.map((user, index) => <li key={index}> {user.name} {user.email}</li>)

  return (
    <div>
        <ul>
            {listHtml}
        </ul>
    </div>
  )
}

export default List
