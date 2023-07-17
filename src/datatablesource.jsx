export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field: 'user',
        headerName: 'User',
        width: 230,
        renderCell: (params) => {
            return (
                <div className="cell-with_img">
                    <img
                        className="cell-img"
                        src={params.row.img}
                        alt="avatar"
                    />
                    {params.row.username}
                </div>
            )
        }
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 230
    },
    {
        field: 'age',
        headerName: 'Age',
        width: 100
    },
    {
        field: "status",
        headerName: 'Status',
        width: 160,
        renderCell: (params) => {
            return (
                <div className={`cell-with_status ${params.row.status}`}>
                    {params.row.status}
                </div>
            )
        }
    }
]

//temporary data

export const userRows = [
    {
        id: 1,
        username: 'Snow',
        img: 'https://i.postimg.cc/rpWM9Y6X/image8.jpg',
        status: 'active',
        email: 'snow@gmail.com',
        age: 40
    },
    {
        id: 2,
        username: 'Tamale',
        img: 'https://i.postimg.cc/rpWM9Y6X/image8.jpg',
        status: 'pending',
        email: 'snow@gmail.com',
        age: 40
    },
    {
        id: 3,
        username: 'Frank',
        img: 'https://i.postimg.cc/rpWM9Y6X/image8.jpg',
        status: 'passive',
        email: 'snow@gmail.com',
        age: 40
    },
    {
        id: 4,
        username: 'Junior',
        img: 'https://i.postimg.cc/rpWM9Y6X/image8.jpg',
        status: 'active',
        email: 'snow@gmail.com',
        age: 40
    },
    {
        id: 5,
        username: 'Allan',
        img: 'https://i.postimg.cc/rpWM9Y6X/image8.jpg',
        status: 'active',
        email: 'snow@gmail.com',
        age: 40
    },
    {
        id: 6,
        username: 'Mark',
        img: 'https://i.postimg.cc/rpWM9Y6X/image8.jpg',
        status: 'active',
        email: 'snow@gmail.com',
        age: 40
    },
    {
        id: 7,
        username: 'Ssali',
        img: 'https://i.postimg.cc/rpWM9Y6X/image8.jpg',
        status: 'active',
        email: 'snow@gmail.com',
        age: 40
    },
    {
        id: 8,
        username: 'Olivia',
        img: 'https://i.postimg.cc/rpWM9Y6X/image8.jpg',
        status: 'pending',
        email: 'snow@gmail.com',
        age: 40
    },
    {
        id: 9,
        username: 'Snow',
        img: 'https://i.postimg.cc/rpWM9Y6X/image8.jpg',
        status: 'active',
        email: 'snow@gmail.com',
        age: 40
    },
    {
        id: 10,
        username: 'Snow',
        img: 'https://i.postimg.cc/rpWM9Y6X/image8.jpg',
        status: 'passive',
        email: 'snow@gmail.com',
        age: 40
    },
    {
        id: 11,
        username: 'Snow',
        img: 'https://i.postimg.cc/rpWM9Y6X/image8.jpg',
        status: 'active',
        email: 'snow@gmail.com',
        age: 40
    },
    {
        id: 12,
        username: 'Snow',
        img: 'https://i.postimg.cc/rpWM9Y6X/image8.jpg',
        status: 'pending',
        email: 'snow@gmail.com',
        age: 40
    },
    {
        id: 13,
        username: 'Snow',
        img: 'https://i.postimg.cc/rpWM9Y6X/image8.jpg',
        status: 'passive',
        email: 'snow@gmail.com',
        age: 40
    },
    {
        id: 14,
        username: 'Snow',
        img: 'https://i.postimg.cc/rpWM9Y6X/image8.jpg',
        status: 'pending',
        email: 'snow@gmail.com',
        age: 40
    },
    {
        id: 15,
        username: 'Snow',
        img: 'https://i.postimg.cc/rpWM9Y6X/image8.jpg',
        status: 'active',
        email: 'snow@gmail.com',
        age: 40
    },
    {
        id: 16,
        username: 'Snow',
        img: 'https://i.postimg.cc/rpWM9Y6X/image8.jpg',
        status: 'passive',
        email: 'snow@gmail.com',
        age: 40
    },
    {
        id: 17,
        username: 'Snow',
        img: 'https://i.postimg.cc/rpWM9Y6X/image8.jpg',
        status: 'active',
        email: 'snow@gmail.com',
        age: 40
    },
    {
        id: 18,
        username: 'Snow',
        img: 'https://i.postimg.cc/rpWM9Y6X/image8.jpg',
        status: 'pending',
        email: 'snow@gmail.com',
        age: 40
    },
    {
        id: 19,
        username: 'Snow',
        img: 'https://i.postimg.cc/rpWM9Y6X/image8.jpg',
        status: 'passive',
        email: 'snow@gmail.com',
        age: 40
    },
    {
        id: 20,
        username: 'Snow',
        img: 'https://i.postimg.cc/rpWM9Y6X/image8.jpg',
        status: 'active',
        email: 'snow@gmail.com',
        age: 40
    },
    {
        id: 21,
        username: 'Snow',
        img: 'https://i.postimg.cc/rpWM9Y6X/image8.jpg',
        status: 'active',
        email: 'snow@gmail.com',
        age: 40
    },
    {
        id: 22,
        username: 'Snow',
        img: 'https://i.postimg.cc/rpWM9Y6X/image8.jpg',
        status: 'passive',
        email: 'snow@gmail.com',
        age: 40
    },
    {
        id: 23,
        username: 'Snow',
        img: 'https://i.postimg.cc/rpWM9Y6X/image8.jpg',
        status: 'active',
        email: 'snow@gmail.com',
        age: 40
    },
    {
        id: 24,
        username: 'Snow',
        img: 'https://i.postimg.cc/rpWM9Y6X/image8.jpg',
        status: 'active',
        email: 'snow@gmail.com',
        age: 40
    },
]