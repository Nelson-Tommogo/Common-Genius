import React from "react";

export interface Skill {
  id: string;
  name: string;
  category: string;
  level: string;
  years: number;
}

interface TableProps {
  skills: Skill[];
}

export default function Table({ skills }: TableProps) {
  return (
    <div className="table-container" style={{ overflowX: "auto" }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          minWidth: 600,
        }}
      >
        <thead>
          <tr>
            <th style={headerCellStyle}>Skill</th>
            <th style={headerCellStyle}>Category</th>
            <th style={headerCellStyle}>Level</th>
            <th style={headerCellStyle}>Years</th>
          </tr>
        </thead>
        <tbody>
          {skills.map((skill) => (
            <tr key={skill.id} style={rowStyle}>
              <td style={cellStyle}>{skill.name}</td>
              <td style={cellStyle}>{skill.category}</td>
              <td style={cellStyle}>{skill.level}</td>
              <td style={cellStyle}>{skill.years}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const headerCellStyle: React.CSSProperties = {
  textAlign: "left",
  padding: "12px 16px",
  borderBottom: "2px solid #e5e7eb",
  backgroundColor: "#f9fafb",
  color: "#111827",
  fontWeight: 600,
};

const cellStyle: React.CSSProperties = {
  padding: "12px 16px",
  borderBottom: "1px solid #e5e7eb",
  color: "#374151",
};

const rowStyle: React.CSSProperties = {
  backgroundColor: "#ffffff",
};
