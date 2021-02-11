import {
    Button,
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    TextField,
    InputBase,
  } from "@material-ui/core";
  import React, { useEffect, useState } from "react";
  import * as SectionService from "./Service";
  import SearchIcon from "@material-ui/icons/Search";
  import AddIcon from "@material-ui/icons/Add";
  import PopUp from "../PopUp";
  import ActionButton from "../ActionButton";
  import { EditOutlined } from "@material-ui/icons";
  import { CloseIcon } from "@material-ui/data-grid";
  import Notification from "../Notification";
  import ConfirmDialog from "../ConfirmDialog";
  import { useStyels } from "./Section5.style";
  

  const initialValues = {
    id: 0,
    title: "",
    subTitle: "",
    parag:"",
    img: "",
    mainImg:""
  };
  const Section5Form = () => {
    const classes = useStyels();
    const [values, setValues] = useState(initialValues);
    const [records, setRecords] = useState(SectionService.getAllData());
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [filterFn, setfilterFn] = useState({
      fn: items => {
        return items;
      }
    });
    const [openPopup, setOpenPopup] = useState(false);
    const [recordForEdit, setRecordForEdit] = useState(null);
    const [notify, setNotify] = useState({isOpen:false, message:'', type:''})
    const [confirmDialog, setConfirmDialog] = useState({isOpen: false, title:'', subTitle:''})
  
    const handleuploadChange=(e)=> {
      const file = e.target.files[0];
      const { name } = e.target;
      getBase64(file).then(base64 => {
        localStorage["fileBase64"] = base64;
        console.debug("file stored",base64);
      });
    let myImg = URL.createObjectURL(file);
    setValues({
      ...values,
      [name]: myImg,
    }); 
   }
    const getBase64 = (file) => {
          return new Promise((resolve,reject) => {
             const reader = new FileReader();
             reader.onload = () => resolve(reader.result);
             reader.onerror = error => reject(error);
             reader.readAsDataURL(file);
           
          });
        }
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
    const handleChangeRowsPerPage = event => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
    const headCells = [
      { id: "title", lable: "Title" },
      { id: "img", lable: "Image" },
      { id: "subtitle", lable: "SubTitle" },
      { id: "Paragraph", lable:"Paragraph"},
      { id: "Main Image", lable:"Main Image"},
      { id: "action", lable: "Action" },
    ];
    const emptyRows =
      rowsPerPage - Math.min(rowsPerPage, records.length - page * rowsPerPage);
  
    const handleInputChange = e => {
      const { name, value } = e.target;
      setValues({
        ...values,
        [name]: value
      });
    };
    const handleSubmit = e => {
      e.preventDefault();
      addOredit(values);
      handleReset()
    };
    const handleReset = e => {
      setValues(initialValues);
    };
    const handleSearch = e => {
      let target = e.target;
      setfilterFn({
        fn: items => {
          if (target.value === "") return items;
          else
            return items.filter(x =>
              x.title.toLowerCase().includes(target.value)
            );
        }
      });
    };
    const addOredit = (section)=>{
      if(section.id === 0)
      SectionService.Insert(section);
      else
      SectionService.Update(section)
      setRecordForEdit(null)
      setOpenPopup(false)
      setRecords(SectionService.getAllData())
      setNotify({
        isOpen:true,
        message:"Submitted succesfully",
        type:"success"
      })
    }
    const openInPopUp = (record) =>{
      setRecordForEdit(record);
      setOpenPopup(true)
    }
    const onDelete = (id)=>{
      setConfirmDialog({...confirmDialog, isOpen:false})
      SectionService.Delete(id);
      setRecords(SectionService.getAllData())
      setNotify({
        isOpen:true,
        message:"Deleted succesfully",
        type:"error"
      })
    }
    useEffect(()=>{
      if(recordForEdit != null){
        setValues({
          ...recordForEdit
        })
      }
    }, [recordForEdit])
    return (
      <>
        <div className={classes.iconsDiv} >
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              onChange={handleSearch}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <Button variant="outlined" color="secondary" startIcon={<AddIcon />} onClick={()=>{setOpenPopup(true);setRecordForEdit(null)}}>
            Add New
          </Button>
        </div>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                {headCells.map(cell => (
                  <TableCell key={cell.id} className={classes.rowCell}>{cell.lable}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? filterFn
                    .fn(records)
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : records
              ).map(record => (
                <TableRow key={record.id}>
                  <TableCell className={classes.txtContainer}>{record.title}</TableCell>
                  <TableCell><img src={record.img} alt=""/></TableCell>
                  <TableCell className={classes.txtContainer}>{record.subTitle}</TableCell>
                  <TableCell className={classes.txtContainer}>{record.parag}</TableCell>
                  <TableCell><img src={record.mainImg} alt=""/></TableCell>

                  <TableCell>
                    <ActionButton onClick={()=>{openInPopUp(record)}}>
                      <EditOutlined color="primary" />
                    </ActionButton>
                    <ActionButton onClick = {()=>{setConfirmDialog({
                      isOpen:true,
                      title:"Are you sure to permanently delete this record?",
                      subTitle:"you can't undo this action ",
                      onConfirm: ()=>{onDelete(record.id)}
                    })}}>
                      <CloseIcon color="secondary"/>
                    </ActionButton>
                    </TableCell>
                </TableRow>
              ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
          component="div"
          count={records.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          SelectProps={{
            inputProps: { "aria-label": "rows per page" },
            native: true
          }}
        />
        <PopUp openPopup={openPopup} setOpenPopup={setOpenPopup} title="Section Two Form">
        <form className={classes.root} noValidate autoComplete="off" >
          <Grid xs={12} className={classes.gridInput}>
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              name="title"
              value={values.title}
              onChange={handleInputChange}
              fullWidth={true}   
              />
           <TextField
              id="outlined-basic"
              label="Subtitle"
              variant="outlined"
              name="subTitle"
              value={values.subTitle}
              onChange={handleInputChange}
              fullWidth={true}
              className={classes.inputClass} 
            /> 
            <TextField
              id="outlined-basic"
              label="Paragraph"
              variant="outlined"
              name="parag"
              value={values.parag}
              onChange={handleInputChange}
              fullWidth={true}
              className={classes.inputClass} 
            />
          
          </Grid>
          <Grid xs={12}>
          <div className={classes.root}>
        <input
          accept="image/*"
          className={classes.input}
          id="contained-button-file"
          multiple
          type="file"
          name="img"
          onChange={handleuploadChange}
        />
        <label htmlFor="contained-button-file">
          <Button variant="contained" color="primary" component="span">
            Upload
          </Button>
        </label>
        <img src={values.img} alt=""/> 
      </div>
          </Grid>
          <Grid xs={12}>
          <div className={classes.root}>
        <input
          accept="image/*"
          className={classes.input}
          id="contained-button-file2"
          multiple
          type="file"
          name="mainImg"
          onChange={handleuploadChange}
        />
        <label htmlFor="contained-button-file2">
          <Button variant="contained" color="primary" component="span">
            Upload Main Image
          </Button>
        </label>
        <img src={values.mainImg} alt=""/> 
      </div>
          </Grid>
          <Grid xs={12}>
            <Button onClick={handleSubmit} color="primary">submit</Button>
            <Button onClick={handleReset} color="secondary">reset</Button>
          </Grid>
        </form>
        </PopUp>
        <Notification notify={notify} setNotify={setNotify}/>
        <ConfirmDialog confirmDialog={confirmDialog} setConfirmDialog={setConfirmDialog}className={classes.dialog}/>
      </>
    );
  };
  
  export default Section5Form;
  