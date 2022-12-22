import  Header from "./componentes/Header";
import  Card from "./componentes/Card";
import  Footer from "./componentes/Footer";


const App = ()=> {
  return (
    <div>
      <Header title="Mi Galeria de Imágenes con React"/>
      <Card url = "https://img.olympicchannel.com/images/image/private/t_social_share_thumb/f_auto/primary/gdwgvjhw5qffboe6rj3x"  title= "Snatch" athlete ="Lasha Talakhadze" href="https://www.youtube.com/watch?v=l78Ih0ZI58M"/>
      <Card url = "https://pbs.twimg.com/media/E7oDauDXMAAVGnR?format=jpg&name=large"  title= "Snatch" athlete ="Keydomar vallenilla " href="https://www.youtube.com/watch?v=0DKKHq9FQH4"/>
      <Card url = "https://m.elmostrador.cl/media/2018/05/odesur.jpg"  title= "Snatch" athlete ="Arley Méndez" href="https://www.youtube.com/watch?v=TziQVpQRaQg"/>
      <Card url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8XahxnhZTNkpzVQwQO4zO5H5kBz5WT9hhUg&usqp=CAU"  title= "Clean and Jerk " athlete ="Lidia Valentín" href="https://www.youtube.com/watch?v=Tug-UUMW7Ok" />;
      <Card url = "https://www.eluniverso.com/resizer/1-4OizP2uZtyMYzlfdQohVpq-Fs=/arc-anglerfish-arc2-prod-eluniverso/public/TGFROOJC6BD4JOQKWKOUEOYLLQ.jpg"  title= "Clean and Jerk " athlete ="Arce Salazar" href="https://www.youtube.com/watch?v=QhICo4DmQcc"/>
      <Footer href= "https://iwf.sport/" direction="ir a IWF"/>
    </div>
)
  }

export default App;
