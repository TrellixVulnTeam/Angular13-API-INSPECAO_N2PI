using System.ComponentModel.DataAnnotations;

namespace InspecaoAPI.Models
{
    public class InspecaoTipo
    {
        public int Id { get; set; }

        [StringLength(20)]
        public string InspecaoNome { get; set; } = string.Empty;
    }
}
