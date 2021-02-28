import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from "next/image"
//import styled from 'styled-components'
import { useUser, useRegistry } from '../../lib/hooks'
import { useTable, useFilters, useGlobalFilter, useAsyncDebounce } from 'react-table'
// A great library for fuzzy filtering/sorting items
import { matchSorter } from 'match-sorter'
import Table from "../../components/Table/reactTable"
import ModalTable from "components/Table/Table.js";
import InfoIcon from '@material-ui/icons/Info';
import Button from 'components/CustomButtons/Button.js';
import Icon from "@material-ui/core/Icon";
import AddIcon from '@material-ui/icons/Add';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import SectionRegistryModal from "pages-sections/sections-page/SectionRegistryModal.js"
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
import defaultImage from "../../assets/img/image_placeholder.jpg";

import style from "assets/jss/nextjs-material-kit-pro/modalStyle.js";
import _ from "lodash"


// import makeData from './makeData'



// const Styles = styled.div`
//   padding: 1rem;

//   table {
//     border-spacing: 0;
//     border: 1px solid black;

//     tr {
//       :last-child {
//         td {
//           border-bottom: 0;
//         }
//       }
//     }

//     th,
//     td {
//       margin: 0;
//       padding: 0.5rem;
//       border-bottom: 1px solid black;
//       border-right: 1px solid black;

//       :last-child {
//         border-right: 0;
//       }
//     }
//   }
// `

// Define a default UI for filtering
function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length
  const [value, setValue] = React.useState(globalFilter)
  const onChange = useAsyncDebounce(value => {
    setGlobalFilter(value || undefined)
  }, 200)

  return (
    <span>
      Search:{' '}
      <input
        value={value || ""}
        onChange={e => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} records...`}
        style={{
          fontSize: '1.1rem',
          border: '0',
        }}
      />
    </span>
  )
}

// Define a default UI for filtering
function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter },
}) {
  const count = preFilteredRows.length

  return (
    <input
      value={filterValue || ''}
      onChange={e => {
        setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
      }}
      placeholder={`Search ${count} records...`}
    />
  )
}

// This is a custom filter UI for selecting
// a unique option from a list
function SelectColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id },
}) {
  // Calculate the options for filtering
  // using the preFilteredRows

  const options = React.useMemo(() => {
    const options = new Set()
    preFilteredRows.forEach(row => {

      options.add(row.values[id])
      // if (row.originalSubRows.length > 0) {
      //   row.subRows.forEach(subRow => {
      //     options.add(subRow.values["certificate.title"])
      //   })
      // }

    })

    return [...options.values()]
  }, [id, preFilteredRows])

  // Render a multi-select box
  return (
    <select
      value={filterValue}
      onChange={e => {
        setFilter(e.target.value || undefined)
      }}
    >
      <option value="">All</option>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}

// This is a custom filter UI that uses a
// slider to set the filter value between a column's
// min and max values
function SliderColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id },
}) {
  // Calculate the min and max
  // using the preFilteredRows

  const [min, max] = React.useMemo(() => {
    let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
    let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
    preFilteredRows.forEach(row => {
      min = Math.min(row.values[id], min)
      max = Math.max(row.values[id], max)
    })
    return [min, max]
  }, [id, preFilteredRows])

  return (
    <>
      <input
        type="range"
        min={min}
        max={max}
        value={filterValue || min}
        onChange={e => {
          setFilter(parseInt(e.target.value, 10))
        }}
      />
      <button onClick={() => setFilter(undefined)}>Off</button>
    </>
  )
}

// This is a custom UI for our 'between' or number range
// filter. It uses two number boxes and filters rows to
// ones that have values between the two
function NumberRangeColumnFilter({
  column: { filterValue = [], preFilteredRows, setFilter, id },
}) {
  const [min, max] = React.useMemo(() => {
    let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
    let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
    preFilteredRows.forEach(row => {
      min = Math.min(row.values[id], min)
      max = Math.max(row.values[id], max)
    })
    return [min, max]
  }, [id, preFilteredRows])

  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <input
        value={filterValue[0] || ''}
        type="number"
        onChange={e => {
          const val = e.target.value
          setFilter((old = []) => [val ? parseInt(val, 10) : undefined, old[1]])
        }}
        placeholder={`Min (${min})`}
        style={{
          width: '70px',
          marginRight: '0.5rem',
        }}
      />
      to
      <input
        value={filterValue[1] || ''}
        type="number"
        onChange={e => {
          const val = e.target.value
          setFilter((old = []) => [old[0], val ? parseInt(val, 10) : undefined])
        }}
        placeholder={`Max (${max})`}
        style={{
          width: '70px',
          marginLeft: '0.5rem',
        }}
      />
    </div>
  )
}

function fuzzyTextFilterFn(rows, id, filterValue) {
  return matchSorter(rows, filterValue, { keys: [row => row.values[id]] })
}

// Let the table remove the filter if the string is empty
fuzzyTextFilterFn.autoRemove = val => !val

// Define a custom filter filter function!
function filterGreaterThan(rows, id, filterValue) {
  return rows.filter(row => {
    const rowValue = row.values[id]
    return rowValue >= filterValue
  })
}

// This is an autoRemove method on the filter function that
// when given the new filter value and returns true, the filter
// will be automatically removed. Normally this is just an undefined
// check, but here, we want to remove the filter if it's not a number
filterGreaterThan.autoRemove = val => typeof val !== 'number'

const useStyles = makeStyles(style);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function Registry({ ...rest }) {
  // const [user, { mutate }] = useUser()
  const [registryData, { mutateData }] = useRegistry()
  const [registry, setRegistry] = useState()
  const [modal, setModal] = useState(false)
  const [modalInfo, setModalInfo] = useState({
    name: "",
    image: defaultImage,
    languages: "",
    certifications: [],
    proAffiliations: "",
    id: ""
  })
  // useEffect(() => {
  //   setRegistry(registryData)
  // }, [registryData])
  // console.log(registryData)
  // console.log("sectionRegistryTahit")
  const classes = useStyles();

  const columns = React.useMemo(
    () => [
      {
        Header: '+',
        columns: [
          {
            Header: 'More',
            accessor: 'id',
            disableFilters: true,

            style: {
              cursor: "pointer",
            },
            Cell: (props) => (

              <Button id={`${props.value}`} onClick={handleClick} justIcon round color="root">
                <InfoIcon />
              </Button>

            ),
          },

        ],
      },
      {
        Header: 'Name',
        columns: [

          {
            Header: 'First Middle',
            accessor: 'firstMiddleName',
          },
          {
            Header: 'Last',
            accessor: 'lastName',
            // Use our custom `fuzzyText` filter on this column
            //filter: 'fuzzyText',
          },
        ],
      },
      {
        Header: 'Languages',
        columns: [

          {
            Header: 'Language',
            accessor: 'language',


            //autoResetFilters: true
          },
        ]
      },
      {
        Header: 'Certification and Qualifications',
        columns: [
          {
            Header: 'Verified',
            accessor: 'verified',

            Filter: SelectColumnFilter
            //Filter: NumberRangeColumnFilter,
            // filter: 'between',
          },
          {
            Header: 'EPIQ Qualified',
            accessor: 'epicQualified',
            Filter: SelectColumnFilter
            //Filter: NumberRangeColumnFilter,
            // filter: 'between',
          },

        ]
      },
      {
        Header: 'Location',
        columns: [
          {
            Header: 'Work Proximity',
            accessor: 'workCity',

            Filter: SelectColumnFilter,
            // filter: 'includes',
          }
        ]
      },


    ],
    []
  )


  async function handleClick(e) {
    console.log(e.currentTarget.id)
    e.preventDefault()
    console.log()
    const res = await fetch(`/api/userRegistry?id=${e.currentTarget.id}&modal=true`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },

    })

    if (res.status === 200) {
      let obj = await res.json()
      console.log(obj)
      const name = `${obj.salutations ? `${obj.salutations} ` : ""}
      ${obj.firstName} ${obj.lastName} 
      ${obj.honorifics ? `${obj.honorifics}` : ""}`


      console.log(_.isEmpty(obj.profilePic))
      setModalInfo(
        {
          name: name,
          image: _.isEmpty(obj.profilePic) ? defaultImage : `data:image/png;base64, ${obj.profilePic}`,
          languages: obj.language.join(", "),
          certifications: obj.certifications

        })
      setModal(true)
    }

    // const obj = registryData.find(({ id }) => id === e.currentTarget.id)




  }

  const data = React.useMemo(() => registryData[0])
  console.log(data)
  return (
    <>

      <br></br>
      <br></br>
      {registryData && <div className="cd-section"  {...rest}>

        <Dialog
          classes={{
            root: classes.modalRoot,
            paper: classes.modal
          }}
          open={modal}
          TransitionComponent={Transition}
          keepMounted
          onClose={() => setModal(false)}
          aria-labelledby="classic-modal-slide-title"
          aria-describedby="classic-modal-slide-description"
        >
          <DialogTitle
            id="classic-modal-slide-title"
            disableTypography
            className={classes.modalHeader}
          >
            <Button
              simple
              className={classes.modalCloseButton}
              key="close"
              aria-label="Close"
              onClick={() => setModal(false)}
            >
              {" "}
              <Close className={classes.modalClose} />
            </Button>
            <h4 className={classes.modalTitle}></h4>
          </DialogTitle>
          <DialogContent
            id="classic-modal-slide-description"
            className={classes.modalBody}
          >

            <Image src={modalInfo.image} alt="..." layout="intrinsic" width={250}
              height={250} />
            <h4>{modalInfo.name} - {modalInfo.languages}</h4>
            <hr></hr>
            <br></br>
            <h5 className={classes.title}>Certifications:</h5>
            <ModalTable
              tableHead={["Certification", "Verified"]}
              tableData={modalInfo.certifications.map(item => {
                if (item.verified) return ([item.title, <Button justIcon round color="success"><VerifiedUserIcon /></Button>])
                return ([item.title, <Button justIcon round color="danger"><VerifiedUserIcon /></Button>])
              }
              )}
            />
            <hr></hr>
            <br></br>
            <h5 className={classes.title}>Professional Affiliation:</h5>
            <h6>{modalInfo.proAffiliations ? modalInfo.proAffiliations.join(", ") : 'TAHIT'}</h6>


          </DialogContent>
          <DialogActions className={classes.modalFooter}>
            <Button onClick={() => setModal(false)} color="secondary">
              Close
    </Button>
          </DialogActions>
        </Dialog>


      </div>}

      {registryData && <><Table columns={columns} data={data} /></>}

    </>
  )
}


