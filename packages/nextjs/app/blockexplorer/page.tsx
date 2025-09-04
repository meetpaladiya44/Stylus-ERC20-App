"use client";

import type { NextPage } from "next";
import { useMemo } from "react";
import { useGlobalState } from "~~/services/store/store";

const BlockExplorer: NextPage = () => {
  const txHistory = useGlobalState(s => s.txHistory);

  const items = useMemo(() => txHistory, [txHistory]);

  return (
    <div className="container mx-auto my-10 p-4">
      <div className="mb-6 text-center">
        <h1 className="text-4xl font-bold mb-2">Your Transaction History</h1>
        <p className="text-lg opacity-80">Actions sent with the configured signer</p>
      </div>

      {items.length === 0 ? (
        <div className="alert">
          <span>No transactions yet. Use the Debug page to mint/transfer/approve/burn tokens.</span>
        </div>
      ) : (
        <div className="bg-slate-50 dark:bg-gray-800/80 rounded-2xl p-6 border border-slate-200 dark:border-blue-500/20">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th className="text-left">Operation</th>
                  <th className="text-left">Status</th>
                  <th className="text-left">Tx Hash</th>
                  <th className="text-left">Time</th>
                </tr>
              </thead>
              <tbody>
                {items.map(tx => (
                  <tr key={tx.hash} className="hover">
                    <td className="font-medium capitalize">{tx.operation}</td>
                    <td>
                      <span
                        className={`badge ${
                          tx.status === "pending" ? "badge-info" : tx.status === "success" ? "badge-success" : "badge-error"
                        }`}
                      >
                        {tx.status}
                      </span>
                    </td>
                    <td className="font-mono text-xs break-all" title={tx.message}>{tx.hash}</td>
                    <td className="text-xs opacity-80">{new Date(tx.timestamp).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlockExplorer;
