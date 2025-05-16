import { useState, useEffect, use } from 'react';
import { configureKEY, getKEY, previousSearchs, searchByID } from 'phantom/utils';

import {
  Box,
  Button,
  TextField,
  Typography,
  Card,
  CardContent,
  CardMedia,
  ListItem,
  List,
  Divider,
  Grid
} from '@mui/material';



function SearchBar() {
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 2
    }}>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Region"
          variant="outlined"
        />
      </Box>
      <Button variant="contained">Search</Button>
    </Box>
  );
}

type lizardCardProps = {
  url: string;
  title: string | null;
}

function ListData() {
  return (
    <List>
      <ListItem>
        <Typography variant="body1">Establecimiento</Typography>
      </ListItem>
      <Divider />
      <ListItem>
        <Typography variant="body1">Categoria</Typography>
      </ListItem>
      <Divider />
      <ListItem>
        <Typography variant="body1">Direccion</Typography>
      </ListItem>
      <Divider />
      <ListItem>
        <Typography variant="body1">Telefono</Typography>
      </ListItem>
      <Divider />
      <ListItem>
        <Typography variant="body1">Estatus</Typography>
      </ListItem>
    </List>
  );
}

function LizardCard({ url, title}: lizardCardProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={url}
      />
      <CardContent>
        <Typography gutterBottom variant="h6">
          {title}
        </Typography>
        <ListData />
      </CardContent>
    </Card>
  );
}

function App() {

  const [arraySearchs, setArraySearchs] = useState<string[]>([]);
  const [arrayContent, setArrayContent] = useState<any[]>([]);
 
  useEffect(() => {
    configureKEY(import.meta.env.VITE_API_KEY)

    const fetchAll = async () => {
      try {
        const data = await previousSearchs();
        setArraySearchs(data);

        if (data.length > 0) {
          const result = await searchByID(data[1]);
          setArrayContent(result);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchAll();
  }, []);

  return (
    <>
      <SearchBar />
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Grid container spacing={6}>
          {arrayContent.map((item, index) => (
            <Grid key={index}>
              <LizardCard url={item.imgUrl} title={item.title} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  )
}

export default App;

