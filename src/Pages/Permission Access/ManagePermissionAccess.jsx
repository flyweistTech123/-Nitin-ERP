import React, { useEffect, useState } from 'react';
import './PermissionAccess.css'
import HOC from '../../Components/HOC/HOC'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'; // Import arrow icons




const ManagePermissionAccess = () => {
    const tableData = [
        {
            id: 1,
            entity: 'ADMISSION',
            subEntities: [
                {
                    id: 'sub1',
                    subentity: "Start Dialing",
                    selected: "Access Denied",
                },
                {
                    id: 'sub2',
                    subentity: "Follow-Up",
                    selected: "Access Denied",
                },
                {
                    id: 'sub3',
                    subentity: "Service",
                    selected: "Access Denied",
                },
                {
                    id: 'sub4',
                    subentity: "Backend",
                    selected: "Access Denied",
                },
                {
                    id: 'sub5',
                    subentity: "Admission",
                    selected: "Access Denied",
                },
                {
                    id: 'sub6',
                    subentity: "Details",
                    selected: "Access Denied",
                },
                {
                    id: 'sub7',
                    subentity: "Payment",
                    selected: "Access Denied",
                },
                {
                    id: 'sub8',
                    subentity: "Personal Details",
                    selected: "Access Denied",
                },
                {
                    id: 'sub9',
                    subentity: "Fee Structure",
                    selected: "Access Denied",
                },
                {
                    id: 'sub10',
                    subentity: "Contact Details",
                    selected: "Access Denied",
                },
                {
                    id: 'sub11',
                    subentity: "Guardian Details",
                    selected: "Access Denied",
                },
                {
                    id: 'sub12',
                    subentity: "Certificate",
                    selected: "Access Denied",
                },
                {
                    id: 'sub13',
                    subentity: "Education Details",
                    selected: "Access Denied",
                },
                {
                    id: 'sub14',
                    subentity: "Create Field",
                    selected: "Access Denied",
                },
                {
                    id: 'sub15',
                    subentity: "Whatsapp",
                    selected: "Access Denied",
                },
                {
                    id: 'sub16',
                    subentity: "Telegram",
                    selected: "Access Denied",
                },
                {
                    id: 'sub17',
                    subentity: "Email",
                    selected: "Access Denied",
                },
                {
                    id: 'sub18',
                    subentity: "Zoom",
                    selected: "Access Denied",
                },
                {
                    id: 'sub19',
                    subentity: "Meeting",
                    selected: "Access Denied",
                },
                {
                    id: 'sub20',
                    subentity: "Generate Fee Structure",
                    selected: "Access Denied",
                },
            ]
        },
        {
            id: 2,
            entity: 'BACKEND',
            subEntities: [
                {
                    id: 'sub1',
                    subentity: "Start Dialing",
                    selected: "Access Denied", // Default selected value
                },
                {
                    id: 'sub2',
                    subentity: "Start Dialing",
                    selected: "Access Denied", // Default selected value
                },
            ]
        },
        {
            id: 3,
            entity: 'SERVICE',
            subEntities: [
                {
                    id: 'sub1',
                    subentity: "Start Dialing",
                    selected: "Access Denied", // Default selected value
                },
            ]
        },
        {
            id: 4,
            entity: 'PENDING ONLINE PAYMENTS',
            subEntities: [
                {
                    id: 'sub1',
                    subentity: "Start Dialing",
                    selected: "Access Denied", // Default selected value
                },
            ]
        },
        {
            id: 5,
            entity: 'PAYMENT RECEIVED',
            subEntities: [
                {
                    id: 'sub1',
                    subentity: "Start Dialing",
                    selected: "Access Denied", // Default selected value
                },
            ]
        },
        {
            id: 6,
            entity: 'REFUND / CANCEL',
            subEntities: [
                {
                    id: 'sub1',
                    subentity: "Start Dialing",
                    selected: "Access Denied", // Default selected value
                },
            ]
        },
        {
            id: 7,
            entity: 'TEMPLATE',
            subEntities: [
                {
                    id: 'sub1',
                    subentity: "Start Dialing",
                    selected: "Access Denied", // Default selected value
                },
            ]
        },
        {
            id: 8,
            entity: 'AUTOMATION REPORT',
            subEntities: [
                {
                    id: 'sub1',
                    subentity: "Start Dialing",
                    selected: "Access Denied", // Default selected value
                },
            ]
        },
        {
            id: 9,
            entity: 'EMPLOYEES',
            subEntities: [
                {
                    id: 'sub1',
                    subentity: "Start Dialing",
                    selected: "Access Denied", // Default selected value
                },
            ]
        },
        {
            id: 10,
            entity: 'PETTY CASH',
            subEntities: [
                {
                    id: 'sub1',
                    subentity: "Start Dialing",
                    selected: "Access Denied", // Default selected value
                },
            ]
        },
        {
            id: 11,
            entity: 'OTHERS',
            subEntities: [
                {
                    id: 'sub1',
                    subentity: "Start Dialing",
                    selected: "Access Denied", // Default selected value
                },
            ]
        },
        {
            id: 12,
            entity: 'EXPENSE',
            subEntities: [
                {
                    id: 'sub1',
                    subentity: "Start Dialing",
                    selected: "Access Denied", // Default selected value
                },
            ]
        },
        {
            id: 13,
            entity: 'REFERENCE FORM',
            subEntities: [
                {
                    id: 'sub1',
                    subentity: "Start Dialing",
                    selected: "Access Denied", // Default selected value
                },
            ]
        },
    ];

    // State to manage the expanded entity
    const [expandedEntity, setExpandedEntity] = useState(null);

    // State to manage selected options for sub-entities
    const [selectedOptions, setSelectedOptions] = useState(() => {
        // Initialize selectedOptions based on tableData
        const initialOptions = {};
        tableData.forEach(entity => {
            entity.subEntities.forEach(subEntity => {
                initialOptions[`${entity.entity}-${subEntity.id}`] = subEntity.selected;
            });
        });
        return initialOptions;
    });

    // Function to toggle the expansion state of a specific entity
    const toggleExpansion = (entityName) => {
        setExpandedEntity(prevEntity => (prevEntity === entityName ? null : entityName));
    };

    // Function to handle changes in selected options for sub-entities
    const handleOptionChange = (entityName, subEntityId, value) => {
        // Update the selectedOptions state
        const key = `${entityName}-${subEntityId}`;
        setSelectedOptions(prevOptions => ({
            ...prevOptions,
            [key]: value,
        }));
    };

    return (
        <>

            <div className='admission'>
                <div className='admission1'>
                    <p>Permission Access</p>
                </div>

                <div className='permissionaccess19'>
                    <div className='permissionaccess20'>
                        <p>Assign access to</p>

                        <div className='permissionaccess21'>
                            <select name="" id="">
                                <option value="">Whatsa</option>
                            </select>
                        </div>
                    </div>

                    <div className='permissionaccess22'>
                        <p>Manage Role</p>
                    </div>

                    <div className='admission13'>
                        <div className='table-container'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Entity</th>
                                        <th>Read</th>
                                        <th>Add</th>
                                        <th>Update</th>
                                        <th>Import</th>
                                        <th>Export</th>
                                        <th>Automation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Iterate through tableData to display entities and their sub-entities */}
                                    {tableData.map((entity) => (
                                        <React.Fragment key={entity.id}>
                                            {/* Entity row */}
                                            <tr>
                                                <td onClick={() => toggleExpansion(entity.entity)} style={{ cursor: 'pointer' }}>
                                                    <div className='permissionaccess24'>
                                                        <p>{entity.entity}</p>
                                                        {/* Display arrow icon based on expansion state */}
                                                        {expandedEntity === entity.entity ? (
                                                            <IoIosArrowUp size={20} color='#000000' />
                                                        ) : (
                                                            <IoIosArrowDown size={20} color='#000000' />
                                                        )}
                                                    </div>
                                                </td>
                                                {/* Placeholder columns */}
                                                <td>
                                                    <div className='permissionaccess23'>
                                                        <select name="" id="">
                                                            <option value="">Access Denied</option>
                                                            <option value="">Personal</option>
                                                            <option value="">Personal & Department</option>
                                                            <option value="">Personal, Department & Sub Department</option>
                                                            <option value="">All Open</option>
                                                            <option value="">All</option>
                                                        </select>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className='permissionaccess23'>
                                                        <select name="" id="">
                                                            <option value="">Access Denied</option>
                                                            <option value="">Personal</option>
                                                            <option value="">Personal & Department</option>
                                                            <option value="">Personal, Department & Sub Department</option>
                                                            <option value="">All Open</option>
                                                            <option value="">All</option>
                                                        </select>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className='permissionaccess23'>
                                                        <select name="" id="">
                                                            <option value="">Access Denied</option>
                                                            <option value="">Personal</option>
                                                            <option value="">Personal & Department</option>
                                                            <option value="">Personal, Department & Sub Department</option>
                                                            <option value="">All Open</option>
                                                            <option value="">All</option>
                                                        </select>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className='permissionaccess23'>
                                                        <select name="" id="">
                                                            <option value="">Access Denied</option>
                                                            <option value="">Personal</option>
                                                            <option value="">Personal & Department</option>
                                                            <option value="">Personal, Department & Sub Department</option>
                                                            <option value="">All Open</option>
                                                            <option value="">All</option>
                                                        </select>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className='permissionaccess23'>
                                                        <select name="" id="">
                                                            <option value="">Access Denied</option>
                                                            <option value="">Personal</option>
                                                            <option value="">Personal & Department</option>
                                                            <option value="">Personal, Department & Sub Department</option>
                                                            <option value="">All Open</option>
                                                            <option value="">All</option>
                                                        </select>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className='permissionaccess23'>
                                                        <select name="" id="">
                                                            <option value="">Access Denied</option>
                                                            <option value="">Personal</option>
                                                            <option value="">Personal & Department</option>
                                                            <option value="">Personal, Department & Sub Department</option>
                                                            <option value="">All Open</option>
                                                            <option value="">All</option>
                                                        </select>
                                                    </div>
                                                </td>
                                            </tr>

                                            {/* Conditionally render sub-entity rows */}
                                            {expandedEntity === entity.entity && entity.subEntities.map((subEntity) => (
                                                <tr key={subEntity.id} >
                                                    <td>
                                                        <div className='permissionaccess25'>
                                                            <p>{subEntity.subentity}</p>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        {/* Render select element for sub-entity */}
                                                        <div className='permissionaccess26'>
                                                            <select
                                                                name=""
                                                                id=""
                                                                value={selectedOptions[`${entity.entity}-${subEntity.id}`]}
                                                                onChange={(e) =>
                                                                    handleOptionChange(entity.entity, subEntity.id, e.target.value)
                                                                }
                                                            >
                                                                <option value="Access Denied">Access Denied</option>
                                                                <option value="Personal">Personal</option>
                                                                <option value="Personal & Department">Personal & Department</option>
                                                                <option value="Personal, Department & Sub Department">Personal, Department & Sub Department</option>
                                                                <option value="All Open">All Open</option>
                                                                <option value="All">All</option>
                                                            </select>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        {/* Render select element for sub-entity */}
                                                        <div className='permissionaccess26'>
                                                            <select
                                                                name=""
                                                                id=""
                                                                value={selectedOptions[`${entity.entity}-${subEntity.id}`]}
                                                                onChange={(e) =>
                                                                    handleOptionChange(entity.entity, subEntity.id, e.target.value)
                                                                }
                                                            >
                                                                <option value="Access Denied">Access Denied</option>
                                                                <option value="Personal">Personal</option>
                                                                <option value="Personal & Department">Personal & Department</option>
                                                                <option value="Personal, Department & Sub Department">Personal, Department & Sub Department</option>
                                                                <option value="All Open">All Open</option>
                                                                <option value="All">All</option>
                                                            </select>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        {/* Render select element for sub-entity */}
                                                        <div className='permissionaccess26'>
                                                            <select
                                                                name=""
                                                                id=""
                                                                value={selectedOptions[`${entity.entity}-${subEntity.id}`]}
                                                                onChange={(e) =>
                                                                    handleOptionChange(entity.entity, subEntity.id, e.target.value)
                                                                }
                                                            >
                                                                <option value="Access Denied">Access Denied</option>
                                                                <option value="Personal">Personal</option>
                                                                <option value="Personal & Department">Personal & Department</option>
                                                                <option value="Personal, Department & Sub Department">Personal, Department & Sub Department</option>
                                                                <option value="All Open">All Open</option>
                                                                <option value="All">All</option>
                                                            </select>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        {/* Render select element for sub-entity */}
                                                        <div className='permissionaccess26'>
                                                            <select
                                                                name=""
                                                                id=""
                                                                value={selectedOptions[`${entity.entity}-${subEntity.id}`]}
                                                                onChange={(e) =>
                                                                    handleOptionChange(entity.entity, subEntity.id, e.target.value)
                                                                }
                                                            >
                                                                <option value="Access Denied">Access Denied</option>
                                                                <option value="Personal">Personal</option>
                                                                <option value="Personal & Department">Personal & Department</option>
                                                                <option value="Personal, Department & Sub Department">Personal, Department & Sub Department</option>
                                                                <option value="All Open">All Open</option>
                                                                <option value="All">All</option>
                                                            </select>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        {/* Render select element for sub-entity */}
                                                        <div className='permissionaccess26'>
                                                            <select
                                                                name=""
                                                                id=""
                                                                value={selectedOptions[`${entity.entity}-${subEntity.id}`]}
                                                                onChange={(e) =>
                                                                    handleOptionChange(entity.entity, subEntity.id, e.target.value)
                                                                }
                                                            >
                                                                <option value="Access Denied">Access Denied</option>
                                                                <option value="Personal">Personal</option>
                                                                <option value="Personal & Department">Personal & Department</option>
                                                                <option value="Personal, Department & Sub Department">Personal, Department & Sub Department</option>
                                                                <option value="All Open">All Open</option>
                                                                <option value="All">All</option>
                                                            </select>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        {/* Render select element for sub-entity */}
                                                        <div className='permissionaccess26'>
                                                            <select
                                                                name=""
                                                                id=""
                                                                value={selectedOptions[`${entity.entity}-${subEntity.id}`]}
                                                                onChange={(e) =>
                                                                    handleOptionChange(entity.entity, subEntity.id, e.target.value)
                                                                }
                                                            >
                                                                <option value="Access Denied">Access Denied</option>
                                                                <option value="Personal">Personal</option>
                                                                <option value="Personal & Department">Personal & Department</option>
                                                                <option value="Personal, Department & Sub Department">Personal, Department & Sub Department</option>
                                                                <option value="All Open">All Open</option>
                                                                <option value="All">All</option>
                                                            </select>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </React.Fragment>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>



                    <div className='permissionaccess27'>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">User can edit settings</label>
                    </div>

                    <div className='permissionaccess28'>
                        <button>Save</button>
                        <button>Apply</button>
                        <button>Delete Role</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default HOC(ManagePermissionAccess)