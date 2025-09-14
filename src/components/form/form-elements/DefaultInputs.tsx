"use client";
import React, { useState } from 'react';
import ComponentCard from '../../common/ComponentCard';
import Label from '../Label';
import Input from '../input/InputField';
import Select from '../Select';
import { ChevronDownIcon } from '../../../icons';

export default function DefaultInputs() {
  const options = [
    { value: "IN", label: "Masuk" },
    { value: "OUT", label: "Pulang" },
  ];

  const handleSelectChange = (value: string) => {
    console.log("Selected value:", value);
  };

  return (
    <ComponentCard title="Pilih Waktu Absen">
      <div className="space-y-6">
        <div>
          <Label>NIK</Label>
          <Input type="text" />
        </div>
        
        <div>
          <Label>Pilih Absen</Label>
          <div className="relative">
            <Select
            options={options}
            placeholder="Select an option"
            onChange={handleSelectChange}
            className="dark:bg-dark-900"
          />
             <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
              <ChevronDownIcon />
            </span>
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
