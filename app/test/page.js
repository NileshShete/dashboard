"use client"
const Page = () => {

  const handleForm = async (formData) => {
    console.log('formData', formData)
  }


  return (
    <div>
      <form action={handleForm}>
        <input type='text' name="username" />
        <button>Send</button>
      </form>
    </div>
  )
}

export default Page