import {
    Box,
    Button,
    Card,
    CardContent,
    Divider,
    List,
    ListItem,
    ListItemText,
    TextField,
    Typography
} from "@mui/material";

import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import AddCommentOutlinedIcon from "@mui/icons-material/AddCommentOutlined";

import { useState } from "react";

import "./OrderNotesCard.css";

export default function OrderNotesCard({ order }) {

    const [note, setNote] = useState("");

    const [notes, setNotes] = useState([

        {
            id: 1,
            text: "Customer requested evening delivery.",
            admin: "Admin",
            date: "30 Jun 2026 • 10:20 AM"
        },

        {
            id: 2,
            text: "Cake packed with extra candles.",
            admin: "Manager",
            date: "30 Jun 2026 • 12:05 PM"
        }

    ]);

    const handleAddNote = () => {

        if (!note.trim()) return;

        setNotes([
            {
                id: Date.now(),
                text: note,
                admin: "Admin",
                date: new Date().toLocaleString()
            },
            ...notes
        ]);

        setNote("");

    };

    return (

        <Card className="notes-card">

            <CardContent>

                <Typography className="notes-title">

                    Order Notes

                </Typography>

                <Divider sx={{ mb: 3 }} />

                <Box className="notes-form">

                    <TextField

                        fullWidth

                        multiline

                        rows={3}

                        placeholder="Add an internal note..."

                        value={note}

                        onChange={(e) =>

                            setNote(e.target.value)

                        }

                    />

                    <Button

                        variant="contained"

                        startIcon={<AddCommentOutlinedIcon />}

                        className="add-note-btn"

                        onClick={handleAddNote}

                    >

                        Add Note

                    </Button>

                </Box>

                <Divider sx={{ my: 3 }} />

                {

                    notes.length === 0 ?

                    (

                        <Box className="empty-notes">

                            <NoteAltOutlinedIcon />

                            <Typography>

                                No notes added yet.

                            </Typography>

                        </Box>

                    )

                    :

                    (

                        <List disablePadding>

                            {

                                notes.map(note => (

                                    <ListItem

                                        key={note.id}

                                        className="note-item"

                                    >

                                        <ListItemText

                                            primary={

                                                <Typography className="note-text">

                                                    {note.text}

                                                </Typography>

                                            }

                                            secondary={

                                                <Typography className="note-meta">

                                                    {note.admin} • {note.date}

                                                </Typography>

                                            }

                                        />

                                    </ListItem>

                                ))

                            }

                        </List>

                    )

                }

            </CardContent>

        </Card>

    );

}