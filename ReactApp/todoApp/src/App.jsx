// React To-Do List (Centered & Responsive Layout) - inline styles only
import React, { useState, useMemo } from "react";

export default function ToDoListApp() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTask = () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setTasks(t => [...t, { id: Date.now(), text: trimmed, completed: false, createdAt: new Date().toISOString() }]);
    setText("");
  };

  const toggleComplete = id => {
    setTasks(t => t.map(x => x.id === id ? { ...x, completed: !x.completed } : x));
  };

  const removeTask = id => {
    setTasks(t => t.filter(x => x.id !== id));
  };

  const counts = useMemo(() => {
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    return { total, active: total - completed, completed };
  }, [tasks]);

  const visible = tasks.filter(t => filter === 'active' ? !t.completed : filter === 'completed' ? t.completed : true);

  const style = {
    page: {
      height: '100vh',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      position: 'relative',
      boxSizing: 'border-box',
      overflow: 'hidden',
      flexDirection: 'column'
    },
    outer: {
      width: '100%',
      maxWidth: '600px',
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    card: {
      width: '100%',
      maxWidth: '600px',
      minWidth: '320px',
      background: 'rgba(255,255,255,0.98)',
      borderRadius: '20px',
      boxShadow: '0 25px 60px rgba(0,0,0,0.15), 0 10px 25px rgba(0,0,0,0.1)',
      padding: '32px',
      boxSizing: 'border-box',
      border: '1px solid rgba(255,255,255,0.2)',
      backdropFilter: 'blur(10px)',
      position: 'relative',
      maxHeight: '90vh',
      overflowY: 'auto',
      flexShrink: 0
    },
    headerRow: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '16px',
      marginBottom: '32px',
      textAlign: 'center'
    },
    titleBlock: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px'
    },
    logo: {
      width: '56px',
      height: '56px',
      borderRadius: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea, #764ba2)',
      boxShadow: '0 8px 20px rgba(102, 126, 234, 0.3)'
    },
    title: {
      fontSize: '28px',
      fontWeight: '700',
      color: '#2d3748',
      letterSpacing: '-0.5px'
    },
    subtitle: {
      fontSize: '14px',
      color: '#718096',
      marginTop: '4px',
      fontWeight: '400'
    },
    inputRow: {
      display: 'flex',
      gap: '12px',
      alignItems: 'center',
      marginBottom: '24px'
    },
    input: {
      flex: 1,
      padding: '16px 18px',
      borderRadius: '12px',
      border: '2px solid #e2e8f0',
      fontSize: '16px',
      outline: 'none',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
      transition: 'all 0.2s ease',
      backgroundColor: '#f8fafc'
    },
    addBtn: {
      padding: '16px 24px',
      borderRadius: '12px',
      border: 'none',
      cursor: 'pointer',
      background: 'linear-gradient(135deg, #667eea, #764ba2)',
      color: '#fff',
      fontWeight: '600',
      minWidth: '120px',
      fontSize: '16px',
      boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)',
      transition: 'all 0.2s ease'
    },
    stats: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: '16px',
      marginBottom: '24px'
    },
    statCard: {
      borderRadius: '12px',
      padding: '20px 16px',
      background: 'linear-gradient(135deg, #f7fafc, #edf2f7)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      border: '1px solid #e2e8f0',
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
    },
    statNumber: {
      fontSize: '24px',
      fontWeight: '700',
      marginBottom: '6px',
      color: '#2d3748'
    },
    statLabel: {
      fontSize: '14px',
      color: '#718096',
      fontWeight: '500'
    },
    tabs: {
      display: 'flex',
      gap: '8px',
      marginBottom: '20px',
      justifyContent: 'center'
    },
    tabBtn: active => ({
      padding: '12px 20px',
      borderRadius: '10px',
      border: active ? 'none' : '2px solid #e2e8f0',
      cursor: 'pointer',
      background: active ? 'linear-gradient(135deg, #667eea, #764ba2)' : '#f8fafc',
      color: active ? '#fff' : '#4a5568',
      fontWeight: '600',
      fontSize: '14px',
      transition: 'all 0.2s ease',
      boxShadow: active ? '0 4px 12px rgba(102, 126, 234, 0.3)' : '0 2px 4px rgba(0,0,0,0.05)'
    }),
    listWrap: { marginTop: '8px' },
    listItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 0',
      borderBottom: '1px solid #e2e8f0',
      transition: 'all 0.2s ease'
    },
    left: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      minWidth: 0,
      flex: 1
    },
    checkBtn: completed => ({
      width: '40px',
      height: '40px',
      borderRadius: '10px',
      border: completed ? 'none' : '2px solid #e2e8f0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      background: completed ? 'linear-gradient(135deg, #48bb78, #38a169)' : '#f8fafc',
      color: completed ? '#fff' : '#a0aec0',
      fontSize: '18px',
      fontWeight: '600',
      transition: 'all 0.2s ease',
      boxShadow: completed ? '0 4px 12px rgba(72, 187, 120, 0.3)' : '0 2px 4px rgba(0,0,0,0.05)'
    }),
    taskText: completed => ({
      fontSize: '16px',
      color: completed ? '#a0aec0' : '#2d3748',
      textDecoration: completed ? 'line-through' : 'none',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      fontWeight: '500'
    }),
    meta: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '12px',
      color: '#a0aec0'
    },
    delBtn: {
      border: 'none',
      background: 'transparent',
      color: '#e53e3e',
      cursor: 'pointer',
      fontWeight: '600',
      padding: '8px 12px',
      borderRadius: '8px',
      fontSize: '14px',
      transition: 'all 0.2s ease'
    },
    empty: {
      textAlign: 'center',
      padding: '60px 20px',
      color: '#a0aec0',
      fontSize: '16px',
      fontWeight: '500'
    }
  };

  const fmtTime = iso => {
    try {
      const d = new Date(iso);
      return d.toLocaleString(undefined, { hour: 'numeric', minute: '2-digit' });
    } catch (e) { return '' }
  };

  return (
    <div style={style.page}>
      {/* Background decorative elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.2) 0%, transparent 50%)',
        zIndex: 0
      }} />

      <div style={style.outer}>
        <div style={style.card}>

          <div style={style.headerRow}>
            <div style={style.titleBlock}>
              <div style={style.logo} aria-hidden>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 7h12M4 12h12M4 17h12" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <div style={style.title}>To‑Do List</div>
                <div style={style.subtitle}>Keep your day organized and productive</div>
              </div>
            </div>
          </div>

          <div style={style.inputRow}>
            <input
              style={style.input}
              placeholder="What needs to be done? (press Enter to add)"
              value={text}
              onChange={e => setText(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') addTask(); }}
              onFocus={e => {
                e.target.style.borderColor = '#667eea';
                e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                e.target.style.backgroundColor = 'black';
              }}
              onBlur={e => {
                e.target.style.borderColor = '#e2e8f0';
                e.target.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
                e.target.style.backgroundColor = '#f8fafc';
              }}
              aria-label="New task"
            />
            <button style={style.addBtn} onClick={addTask} aria-label="Add task">+ Add</button>
          </div>

          <div style={style.stats}>
            <div style={style.statCard}><div style={style.statNumber}>{counts.total}</div><div style={style.statLabel}>Total</div></div>
            <div style={style.statCard}><div style={style.statNumber}>{counts.active}</div><div style={style.statLabel}>Active</div></div>
            <div style={style.statCard}><div style={style.statNumber}>{counts.completed}</div><div style={style.statLabel}>Completed</div></div>
          </div>

          <div style={style.tabs}>
            {['all', 'active', 'completed'].map(k => (
              <button key={k} style={style.tabBtn(filter === k)} onClick={() => setFilter(k)}>
                {k[0].toUpperCase() + k.slice(1)}
              </button>
            ))}
          </div>

          <section style={style.listWrap}>
            {visible.length === 0 ? (
              <div style={style.empty}>No tasks yet — add something to get started.</div>
            ) : (
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {visible.map(item => (
                  <li key={item.id} style={style.listItem}>
                    <div style={style.left}>
                      <button
                        style={style.checkBtn(item.completed)}
                        onClick={() => toggleComplete(item.id)}
                        aria-label={item.completed ? 'Mark as uncompleted' : 'Mark as completed'}
                      >
                        {item.completed ? '✓' : ''}
                      </button>

                      <div style={{ minWidth: 0 }}>
                        <div style={style.taskText(item.completed)} title={item.text}>{item.text}</div>
                        <div style={{ fontSize: 12, color: '#9a9fa6', marginTop: 6 }}>{fmtTime(item.createdAt)}</div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div style={style.meta}></div>
                      <button style={style.delBtn} onClick={() => removeTask(item.id)} aria-label="Delete task">Delete</button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </section>

        </div>
      </div>
    </div>
  );
}
