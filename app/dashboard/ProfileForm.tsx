'use client';

export function ProfileForm({ user }: any) {

  const updateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);

    const body = {
      name: formData.get('name'),
      bio: formData.get('bio'),
      age: formData.get('age'),
      image: formData.get('image'),
    };

    const res = await fetch('/api/user', {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    await res.json();
  };

  return (
    <div>
      <h2>Edit Your Profile</h2>
      <form onSubmit={updateUser} style={{display: 'flex', flexDirection: 'column',rowGap: '10px', margin:'0 auto', width:'500px'}}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" defaultValue={user?.name ?? ''} />
        <label htmlFor="bio">Bio</label>
        <textarea
          name="bio"
          cols={30}
          rows={10}
          defaultValue={user?.bio ?? ''}
        ></textarea>
        <label htmlFor="age">Age</label>
        <input type="text" name="age" defaultValue={user?.age ?? 0} />
        <label htmlFor="image">Profile Image URL</label>
        <input type="text" name="image" defaultValue={'https://play-lh.googleusercontent.com/V7N6oSYnBMAl5mE_4-h7Ve9ou3wLmQ8-X7wVthYhhF7OdjtnWhgcXoUREd3Lepn7DQw'} />

        <button type="submit">Save</button>
      </form>
    </div>
  );
}