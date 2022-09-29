import NoteIcon from '@mui/icons-material/Note';

export default function TopBar() {
    return (
        <div className="header">
            <h1 className="title"><NoteIcon className='icon' fontSize='large'/>Kaizen</h1>
        </div>
    );
}