export interface Column<T> {
  key: string;
  title: string;
  dataIndex: keyof T;
}

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
}

export function DataTable<T>({
  data,
  columns,
  loading,
}: DataTableProps<T>) {

  if (loading) return <p className="p-4">Loading...</p>;

  return (
    <div className="overflow-x-auto">
      <table className=" min-w-full w-full border border-gray-300 rounded-lg">

        <thead className="bg-gray-100">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className="p-2 text-left font-semibold w-1/3"
              >
                {col.title}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-t hover:bg-gray-50">
              {columns.map((col) => (
                <td key={col.key} className="p-2 w-1/3">
                  {String(row[col.dataIndex])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}