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
    public class InspecoesController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public InspecoesController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/Inspecoes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Inspecao>>> GetInspecoes()
        {
          if (_context.Inspecoes == null)
          {
              return NotFound();
          }
            return await _context.Inspecoes.ToListAsync();
        }

        // GET: api/Inspecoes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Inspecao>> GetInspecao(int id)
        {
          if (_context.Inspecoes == null)
          {
              return NotFound();
          }
            var inspecao = await _context.Inspecoes.FindAsync(id);

            if (inspecao == null)
            {
                return NotFound();
            }

            return inspecao;
        }

        // PUT: api/Inspecoes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutInspecao(int id, Inspecao inspecao)
        {
            if (id != inspecao.Id)
            {
                return BadRequest();
            }

            _context.Entry(inspecao).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!InspecaoExists(id))
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

        // POST: api/Inspecoes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Inspecao>> PostInspecao(Inspecao inspecao)
        {
          if (_context.Inspecoes == null)
          {
              return Problem("Entity set 'DatabaseContext.Inspecoes'  is null.");
          }
            _context.Inspecoes.Add(inspecao);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetInspecao", new { id = inspecao.Id }, inspecao);
        }

        // DELETE: api/Inspecoes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteInspecao(int id)
        {
            if (_context.Inspecoes == null)
            {
                return NotFound();
            }
            var inspecao = await _context.Inspecoes.FindAsync(id);
            if (inspecao == null)
            {
                return NotFound();
            }

            _context.Inspecoes.Remove(inspecao);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool InspecaoExists(int id)
        {
            return (_context.Inspecoes?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
