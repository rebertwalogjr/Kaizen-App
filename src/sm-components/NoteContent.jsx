import Typography from "@mui/material/Typography";

export default function NoteContent(props) {

   let content = props.content;
   
   if (content.length > 100){
    content = content.substr(0,97) + "...";
   }

  return (
    <Typography variant="body2" color="text.secondary">
      {content}
    </Typography>
  );
}
