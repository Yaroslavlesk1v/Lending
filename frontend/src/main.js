import { getPages, getSetting } from "./api";

const app = document.querySelector("#app")

async function start(){
  try{
      // const settings = await getSetting();
  const [settings, page] = await Promise.all([
    getSetting(),
    getPages(location.pathname)
  ])
  console.log(settings)

  document.title = `${page.title} - ${settings.siteName}`
  
  console.log(page)
  
  }catch (error) {
    app.textContent = `Something went wrong: ${error.massage}`
  }

}

start();