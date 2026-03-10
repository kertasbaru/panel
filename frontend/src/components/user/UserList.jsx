import Table from '../common/Table';
import Badge from '../common/Badge';

const columns = [
  { key: 'name', label: 'Nama' },
  { key: 'email', label: 'Email' },
  { key: 'phone', label: 'No. HP' },
  {
    key: 'role',
    label: 'Role',
    render: (row) => (
      <Badge variant={row.role === 'admin' ? 'danger' : row.role === 'agen' ? 'warning' : 'info'}>
        {row.role}
      </Badge>
    ),
  },
  {
    key: 'is_active',
    label: 'Status',
    render: (row) => (
      <Badge variant={row.is_active ? 'success' : 'danger'}>
        {row.is_active ? 'Aktif' : 'Nonaktif'}
      </Badge>
    ),
  },
];

const UserList = ({ users = [], loading = false }) => {
  return <Table columns={columns} data={users} loading={loading} />;
};

export default UserList;
