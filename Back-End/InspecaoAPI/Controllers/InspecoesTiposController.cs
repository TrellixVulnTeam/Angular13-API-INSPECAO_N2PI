using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using InspecaoAPI.Data;
using InspecaoAPI.Models;

namespace InspecaoAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InspecoesTiposController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public InspecoesTiposController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/InspecoesTipos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<InspecaoTipo>>> GetInspecaoTipos()
        {
          if (_context.InspecaoTipos == null)
          {
              return NotFound();
          }
            return await _context.InspecaoTipos.ToListAsync();
        }

        // GET: api/InspecoesTipos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<InspecaoTipo>> GetInspecaoTipo(int id)
        {
          if (_context.InspecaoTipos == null)
          {
              return NotFound();
          }
            var inspecaoTipo = await _context.InspecaoTipos.FindAsync(id);

            if (inspecaoTipo == null)
            {
                return NotFound();
            }

            return inspecaoTipo;
        }

        // PUT: api/InspecoesTipos/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutInspecaoTipo(int id, InspecaoTipo inspecaoTipo)
        {
            if (id != inspecaoTipo.Id)
            {
                return BadRequest();
            }

            _context.Entry(inspecaoTipo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!InspecaoTipoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/InspecoesTipos
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<InspecaoTipo>> PostInspecaoTipo(InspecaoTipo inspecaoTipo)
        {
          if (_context.InspecaoTipos == null)
          {
              return Problem("Entity set 'DatabaseContext.InspecaoTipos'  is null.");
          }
            _context.InspecaoTipos.Add(inspecaoTipo);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetInspecaoTipo", new { id = inspecaoTipo.Id }, inspecaoTipo);
        }

        // DELETE: api/InspecoesTipos/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteInspecaoTipo(int id)
        {
            if (_context.InspecaoTipos == null)
            {
                return NotFound();
            }
            var inspecaoTipo = await _context.InspecaoTipos.FindAsync(id);
            if (inspecaoTipo == null)
            {
                return NotFound();
            }

            _context.InspecaoTipos.Remove(inspecaoTipo);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool InspecaoTipoExists(int id)
        {
            return (_context.InspecaoTipos?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
